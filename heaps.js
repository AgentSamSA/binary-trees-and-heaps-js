// max-heap implementation in JavaScript via array

class Heap {
	constructor() {
		this.heap = [null];
	}
	// heapify the data structure around max values
	maxHeapify(arr, n, i) {
		let largest = i;
		let leftIndex = 2 * i + 1;
		let rightIndex = 2 * i + 2;

		if (leftIndex < n && arr[leftIndex] > arr[largest]) {
			largest = leftIndex;
		}
		if (rightIndex < n && arr[rightIndex] > arr[largest]) {
			largest = rightIndex;
		}
		if (largest != i) {
			let temp = arr[i];
			arr[i] = arr[largest];
			arr[largest] = temp;
			this.maxHeapify(arr, n, largest);
		}
	}
	// insert a value into the heap
	insert(data) {
		const size = this.heap.length;

		if (size === 0) {
			this.heap.push(data);
		} else {
			this.heap.push(data);

			for (let i = parseInt(this.heap.length / 2 - 1); i >= 0; i--) {
				this.maxHeapify(this.heap, this.heap.length, i);
			}
		}
	}
	// remove a specific value from the heap
	remove(data) {
		const size = this.heap.length;

		let i;
		for (i = 0; i < size; i++) {
			if (data === this.heap[i]) {
				break;
			}
		}

		[this.heap[i], this.heap[size - 1]] = [this.heap[size - 1], this.heap[i]];
		this.heap.splice(size - 1);

		for (let i = parseInt(this.heap.length / 2 - 1); i >= 0; i--) {
			this.maxHeapify(this.heap, this.heap.length, i);
		}
	}
	// returns the max value from the heap
	findMax() {
		return this.heap[0];
	}
	// removes the max value from the heap
	removeMax() {
		this.remove(this.heap[0]);
	}
	// stores the max value and then removes it from the heap
	extractMax() {
		const max = this.heap[0];
		this.remove(max);
		return max;
	}
	// return the size of the heap
	size() {
		return this.heap.length;
	}
	// check if the heap is empty
	isEmpty() {
		return this.heap.length === 0;
	}
	// returns the heap structure
	getHeap() {
		return this.heap;
	}
}

// min-heap implementation in JavaScript via array

class Heap {
	constructor() {
		this.heap = [null];
	}
	// heapify the data structure around min values
	minHeapify(arr, n, i) {
		let smallest = i;
		let leftIndex = 2 * i + 1;
		let rightIndex = 2 * i + 2;

		if (leftIndex < n && arr[leftIndex] < arr[smallest]) {
			smallest = leftIndex;
		}
		if (rightIndex < n && arr[rightIndex] < arr[smallest]) {
			smallest = rightIndex;
		}
		if (smallest != i) {
			let temp = arr[i];
			arr[i] = arr[smallest];
			arr[smallest] = temp;
			this.minHeapify(arr, n, smallest);
		}
	}
	// insert a value into the heap
	insert(data) {
		const size = this.heap.length;

		if (size === 0) {
			this.heap.push(data);
		} else {
			this.heap.push(data);

			for (let i = parseInt(this.heap.length / 2 - 1); i >= 0; i--) {
				this.minHeapify(this.heap, this.heap.length, i);
			}
		}
	}
	// remove a specific value from the heap
	remove(data) {
		const size = this.heap.length;

		let i;
		for (i = 0; i < size; i++) {
			if (data === this.heap[i]) {
				break;
			}
		}

		[this.heap[i], this.heap[size - 1]] = [this.heap[size - 1], this.heap[i]];
		this.heap.splice(size - 1);

		for (let i = parseInt(this.heap.length / 2 - 1); i >= 0; i--) {
			this.minHeapify(this.heap, this.heap.length, i);
		}
	}
	// returns the max value from the heap
	findMin() {
		return this.heap[0];
	}
	// removes the max value from the heap
	removeMin() {
		this.remove(this.heap[0]);
	}
	// stores the max value and then removes it from the heap
	extractMin() {
		const min = this.heap[0];
		this.remove(min);
		return min;
	}
	// return the size of the heap
	size() {
		return this.heap.length;
	}
	// check if the heap is empty
	isEmpty() {
		return this.heap.length === 0;
	}
	// returns the heap structure
	getHeap() {
		return this.heap;
	}
}