package com.ds.hash;

public class HashTableArray<T> {

	Entry[] arrayHash;
	int size;

	public HashTableArray(int size) {
		this.size = size;
		arrayHash = new Entry[size];

		for (int i = 0; i < size; i++) {
			arrayHash[i] = new Entry();
		}
	}

	public int getHash(int key) {
		return key % size;
	}

	public void put(int key, Object value) {
		int hashIndex = getHash(key);

		Entry arrayValue = arrayHash[hashIndex];
		Entry newItem = new Entry(key, value);

		newItem.next = arrayValue.next;
		arrayValue.next = newItem;

	}

	@SuppressWarnings("unchecked")
	public T get(int key) {

		int hashIndex = getHash(key);
		Entry arrayValue = arrayHash[hashIndex];
		T value = null;

		while (arrayValue != null) {
			if (arrayValue.getKey() == key) {
				value = (T) arrayValue.getValue();
				break;
			}
			arrayValue = arrayValue.next;
		}

		return value;
	}

}
