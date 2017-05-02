package com.ds;

public class StackArrayDemo {

	public static void main(String[] args){
		StackArray<Integer> st = new StackArray<Integer>(5);
		
		st.push(11);
		st.push(13);
		st.push(15);
		st.push(17);
		st.push(19);
		st.push(21);
		
		while (!st.isEmpty()) {
			System.out.println(st.pop());
		}
		
	}

}
