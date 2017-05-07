package com.ds.search;

public class DataSet {

	int[] data;
	int size;
	int numberTry;

	public DataSet(int size) {
		this.size = size;
		data = new int[this.size];

		// prefill some default data
		for (int i = 1; i <= this.size; i++) {
			data[i - 1] = i;
		}
		numberTry = 0;
	}
	
	public int getSize(){
		return this.size;
	}

}
