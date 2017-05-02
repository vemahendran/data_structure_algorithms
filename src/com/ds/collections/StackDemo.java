package com.ds.collections;

import java.util.Stack;

public class StackDemo {

	public static void main(String[] args) {


		Stack<String> st = new Stack<String>();
		st.push("Venkatesan");
		st.push("Keerthi");
		
		System.out.println(st.size());
		System.out.println(st.pop());
	}

}
