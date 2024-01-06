import { formatDistanceToNow } from 'date-fns';

export function formatTimeRelToCurrDate(date) {
    if (!date) {
        return 'Invalid Date';
    }
    // Calculate the relative time difference to the current date
    const relativeTime = formatDistanceToNow(new Date(date), { addSuffix: true });

    return relativeTime;
}