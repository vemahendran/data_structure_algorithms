package com.ds.search;

public class LinearSearch {

	public static void main(String[] args) {
		DataSet data = new DataSet(1000000);
		int search = 979799998;
		Boolean isFound = false;
		
		for(int i=0; i<data.getSize(); i++){
			data.numberTry++;
			if(data.data[i] == search){
				System.out.println("The number is found after " + data.numberTry + " try");
				isFound = true;
				break;
			}
		}
		
		if(!isFound){
			System.out.println("The number doesn't exist in the given array");
		}
		

	}

}
