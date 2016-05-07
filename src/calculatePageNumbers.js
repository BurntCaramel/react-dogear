const { min, max, floor, ceil } = Math;

export default function calculatePageNumbers({ total, current, maxItems, leading, trailing }) {
	let pageNumbers = [];

	const uninterruptedCount = leading + trailing + 1;

	const remainingPagesCount = total - uninterruptedCount;
	const remainingItemsCount = maxItems - uninterruptedCount;
	let firstUninterruptedPage = max(current - leading, 1);
	const lastUninterruptedPage = min(total, firstUninterruptedPage + (uninterruptedCount - 1));
	firstUninterruptedPage = max(1, lastUninterruptedPage - (uninterruptedCount - 1));

	let leadingItemsCount = 0;
	let trailingItemsCount = 0;

	if (remainingPagesCount > 0) {
		const leadingPagesCount = firstUninterruptedPage - 1;
		const trailingPageCount = total - lastUninterruptedPage;

		const leadingPagesFraction = leadingPagesCount / (leadingPagesCount + trailingPageCount);
		// Round up (ceil) so that if it's possible to fit a leading page, we put one there.
		leadingItemsCount = min(ceil(leadingPagesFraction * remainingItemsCount), leadingPagesCount);
		// Make sure if we can have at a single trailing page if it fits.
		if (lastUninterruptedPage < total) {
			leadingItemsCount = min(leadingItemsCount, remainingItemsCount - 1);
		}
		trailingItemsCount = remainingItemsCount - leadingItemsCount;
	}

	if (leadingItemsCount > 0) {
		const leadingPagesStride = max(1, firstUninterruptedPage / leadingItemsCount);
		for (var pageNumber = 1.0; pageNumber < firstUninterruptedPage; pageNumber += leadingPagesStride) {
			pageNumbers.push(
				floor(pageNumber)
			);
		}
	}

	for (var pageNumber = firstUninterruptedPage; pageNumber <= lastUninterruptedPage; pageNumber++) {
		pageNumbers.push(
			pageNumber
		);
	}

	if (trailingItemsCount > 0) {
		let trailingItems = [];
		const trailingPagesStride = max(1, (total - lastUninterruptedPage + 1) / trailingItemsCount);

		for (var pageNumber = total; pageNumber > lastUninterruptedPage; pageNumber -= trailingPagesStride) {
			trailingItems.unshift(
				ceil(pageNumber)
			);
		}

		pageNumbers = pageNumbers.concat(trailingItems);
	}

	return pageNumbers;
}
