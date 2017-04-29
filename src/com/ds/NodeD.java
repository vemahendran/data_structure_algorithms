package com.ds;

public class NodeD {
	
	Object value;
	NodeD previous;
	NodeD next;

	public NodeD(Object value, NodeD previous, NodeD next) {
		this.value = value;
		this.previous = previous;
		this.next = next;
	}

}
