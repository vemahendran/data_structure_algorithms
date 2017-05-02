package com.ds.collections;

import java.util.Iterator;
import java.util.LinkedList;

public class LinkedListDemo {

	public static void main(String[] args) {

		LinkedList<String> ls = new LinkedList<String>();

		ls.add("Venkat");
		ls.add("Nithin");
		ls.add("Keethi");

		Iterator<String> it = ls.iterator();

		while (it.hasNext()) {
			System.out.println(it.next());
		}

	}

}
