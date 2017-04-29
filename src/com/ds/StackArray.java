package com.ds;

public class StackArray<T> {

	int size;
	int top;
	Object[] stack;

	public StackArray(int size) {
		this.size = size;
		stack = new Object[size];
		top = -1;
	}

	public void push(T value) {
		if (isFull()) {
			System.out.println("stack is full");
			return;
		}
		top = top + 1;
		stack[top] = value;
	}

	public T pop() {
		if (isEmpty()) {
			System.out.println("stack is empty");
			return null;
		}
		T value = (T) stack[top];
		top = top - 1;
		return value;
	}

	public Boolean isFull() {
		return (top == size - 1);
	}

	public Boolean isEmpty() {
		return (top == -1);
	}

}
