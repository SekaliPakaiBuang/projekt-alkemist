import { redis } from 'bun';

interface SupportItem {
	supporter_name: string;
	quantity: number;
	amount: number;
	updated_at: string;
}

const apiKey = process.env.TR_API_KEY;

if (!process.env.TR_API_KEY) {
	throw new Error('TR_API_KEY tidak ada di environment variable.');
}

class TrakteerService {
	private pollSchedule: ReturnType<typeof setInterval> | null;

	constructor() {
		this.pollSchedule = null;
	}

	start(): void {
		console.info('Mulai mendapatkan data Trakteer');
		this.pollSchedule = setInterval(() => void this.poll(), 20000);
		void this.poll();
	}

	private async poll(): Promise<void> {
		try {
			const response = await fetch(
				`https://api.trakteer.id/v1/public/supports?limit=10&page=1`,
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'X-Requested-With': 'XMLHttpRequest',
						key: apiKey ?? ''
					}
				}
			);

			if (!response.ok) {
				console.error('Trakteer API error:', response.status);
				return;
			}

			const body: any = await response.json();
			const raw: any[] = body?.result?.data ?? [];

			const data: SupportItem[] = raw.map((item: any) => ({
				supporter_name: String(item.supporter_name),
				quantity: Number(item.quantity),
				amount: Number(item.amount),
				updated_at: String(item.updated_at)
			}));

			await redis.set('trakteer', JSON.stringify(data));
		} catch (err) {
			console.error('Error polling Trakteer:', err);
		}
	}

	stop(): void {
		if (this.pollSchedule) {
			clearInterval(this.pollSchedule as unknown as number);
			this.pollSchedule = null;
		}
	}
}

export default new TrakteerService();