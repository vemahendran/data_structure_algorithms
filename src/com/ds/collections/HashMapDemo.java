package com.ds.collections;

import java.util.HashMap;
import java.util.Map;

public class HashMapDemo {

	public static void main(String[] args) {

		HashMap<Integer, String> map = new HashMap<Integer, String>();
		
		map.put(10, "Venkatesan");
		map.put(6455, "Venkatesan");
		map.put(32, "Nithin");
		
		System.out.println(map.get(32));
		
		for(Map.Entry<Integer, String> m: map.entrySet()){
			System.out.println("Key: " + m.getKey() + "\t Value: " + m.getValue());
		}
		
		System.out.println(map.remove(6455));
		
	}

}
