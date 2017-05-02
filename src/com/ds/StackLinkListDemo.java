package com.ds;

public class StackLinkListDemo {

	public static void main(String[] args) {
		StackLinkList<String> list = new StackLinkList<String>();
		
		list.pop();
		list.push("Venkat");
		list.push("Keerthi");
		list.push("Nithin");
		
		System.out.println("------------");
		
		list.display();
		System.out.println("------------");
		System.out.println(list.pop());
		System.out.println("------------");
		list.display();

		
	}

}
