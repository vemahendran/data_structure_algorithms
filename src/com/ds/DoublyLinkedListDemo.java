package com.ds;

public class DoublyLinkedListDemo {

	public static void main(String[] args) {
		DoublyLinkedList<String> list = new DoublyLinkedList<String>();
		
		list.add("Venkat");
		list.add("Keerthi");
		list.add("Gayee");
		list.add("Nithin");
		
		System.out.println("Before delete opration:");
		list.display();
		list.delete();
		System.out.println("After delete opration:");
		list.display();
		
		
		DoublyLinkedList<Integer> list2 = new DoublyLinkedList<Integer>();
		
		list2.add(25);
		list2.add(35);
		list2.add(45);
		
		list2.display();

	}

}
