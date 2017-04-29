package com.ds;

public class SinglyLinkedList<T> {
	
	Node head;

	public SinglyLinkedList() {
		head = null;
	}
	
	public void add(Object value) {
		Node newNode = new Node(value, null);
		
		if (head == null) {
			head = newNode;
		} else {
			newNode.next = head;
			head = newNode;
		}
	}
	
	public void delete(){
		head = head.next;
	}
	
	public void display(){
		
		Node n = head;
		
		while(n != null) {
			System.out.println(n.value);
			n = n.next;
		}
		
	}
	

}
