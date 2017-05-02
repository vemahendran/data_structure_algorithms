package com.ds;

public class StackLinkList<T> {

	Node top;

	public StackLinkList() {
		top = null;
	}

	public void push(Object value) {
		Node newNode = new Node(value, null);

		if (top == null) {
			top = newNode;
		} else {
			newNode.next = top;
			top = newNode;
		}
	}

	public T pop() {

		if (top == null) {
			System.out.println("Stack is empty");
			return null;
		}
		T poppedValue = (T) top.value;
		top = top.next;
		return poppedValue;
	}

	public void display() {

		Node n = top;

		while (n != null) {
			System.out.println(n.value);
			n = n.next;
		}

	}

}
