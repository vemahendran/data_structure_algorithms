package com.ds;

import java.util.Arrays;

public class StackDynamicArray<T> {

	int size;
	int top;
	Object[] stack;

	public StackDynamicArray(int size) {
		this.size = size;
		stack = new Object[size];
		top = -1;
	}

	public void push(T value) {
		top = top + 2;
		ensureCapacity(top);
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

	private void ensureCapacity(int minCapacity) {
		int oldCapacity = stack.length;
		if (minCapacity > oldCapacity) {
			int newCapacity = oldCapacity * 2;
			if (newCapacity < minCapacity) {
				newCapacity = minCapacity;
			}
			stack = Arrays.copyOf(stack, newCapacity);
		}
	}
	
	public int getSize(){
		return stack.length;
	}
	
	

	public Boolean isEmpty() {
		return (top == -1);
	}

}
