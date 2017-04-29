package com.ds.hash;

public class Entry {

	int key;
	Object value;
	Entry next;
	
	public Entry() {
		next = null;
	}
	
	public Entry(int key, Object value){
		this.key = key;
		this.value = value;
		next = null;
	}
	
	public int getKey(){
		return key;
	}
	
	public Object getValue(){
		return value;
	}

}
