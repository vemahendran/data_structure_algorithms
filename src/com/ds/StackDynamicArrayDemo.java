package com.ds;

public class StackDynamicArrayDemo {

	public static void main(String[] args) {

		StackDynamicArray<Integer> st = new StackDynamicArray<>(2);
		System.out.println("Stack size: " + st.getSize());
		st.push(11);
		System.out.println("Stack size: " + st.getSize());
		st.push(12);
		System.out.println("Stack size: " + st.getSize());
		st.push(13);
		System.out.println("Stack size: " + st.getSize());
		st.push(14);
		System.out.println("Stack size: " + st.getSize());
		st.push(15);
		System.out.println("Stack size: " + st.getSize());

	}

}
