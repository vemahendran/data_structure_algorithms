package com.ds.collections;

import java.util.HashSet;
import java.util.Iterator;
import java.util.TreeSet;

public class HashSetDemo {

	public static void main(String[] args) {

		
		HashSet<String>  ls = new HashSet<String>();
		ls.add("Venkat");
		ls.add("Nithin");
		ls.add("Keerthi");
		// HashSet doesn't allow duplicate values
		ls.add("Keerthi");

		Iterator<String> it = ls.iterator();

		// The values are not ordered in HashSet
		while (it.hasNext()) {
			System.out.println(it.next());
		}
		
		System.out.println("-----------");
		// To store value in ordered list, we can use TreeSet
		TreeSet<String>  ls1 = new TreeSet<String>();
		ls1.add("Venkat");
		ls1.add("Nithin");
		ls1.add("Keerthi");
		// HashSet doesn't allow duplicate values
		ls1.add("Keerthi");

		Iterator<String> it1 = ls1.iterator();
		while (it1.hasNext()) {
			System.out.println(it1.next());
		}

	}

}
