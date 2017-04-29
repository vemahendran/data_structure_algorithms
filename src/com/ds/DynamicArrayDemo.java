package com.ds;

public class DynamicArrayDemo {

	public static void main(String[] args) {

		DynamicArray<Integer> ds = new DynamicArray<Integer>();
		
		System.out.println(ds.getSize());
		ds.put(10);
		System.out.println(ds.getSize());
		ds.put(11);
		System.out.println(ds.getSize());
		ds.put(13);
		System.out.println(ds.getSize());
		ds.put(14);
		System.out.println(ds.getSize());
		ds.put(15);
		System.out.println(ds.getSize());
		ds.put(16);
		
		System.out.println("Elements in the array: ");
		for(int i=0; i<ds.getSize(); i++){
			System.out.print(ds.get(i) + "\t");
		}

	}

}
