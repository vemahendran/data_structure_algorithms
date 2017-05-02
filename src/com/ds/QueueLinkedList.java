package com.ds;

public class QueueLinkedList<T> {

	NodeD rear;
	NodeD front;

	public QueueLinkedList() {
		rear = null;
		front = null;
	}

	public void enQueue(T value) {

		NodeD newNode = new NodeD(value, null, null);

		if (rear == null || front == null) {
			rear = newNode;
			front = newNode;
		} else {
			newNode.next = null;
			newNode.previous = rear;
			rear.next = newNode;
			rear = newNode;
		}
	}

	public T deQueue() {
		if (rear == null || front == null) {
			System.out.println("Queue is empty");
			return null;
		}

		T removedItem = (T) front.value;
		front = front.next;
		if(front != null) {
			front.previous = null;
		}
		return removedItem;

	}

	public void display() {
		NodeD n = rear;

		while (n != null) {
			System.out.println((T) n.value);
			n = n.next;
		}
	}

}
