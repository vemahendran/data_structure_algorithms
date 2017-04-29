package com.ds.hash;

public class HashTableArrayDemo {

	public static void main(String[] args) {
		HashTableArray<String> table = new HashTableArray<String>(10);
		
		table.put(12, "Venkat");
		table.put(14, "Gayee");
		table.put(13, "Keerthi");
		table.put(15, "Nithin");
		
		System.out.println(table.get(13));
	}

}
