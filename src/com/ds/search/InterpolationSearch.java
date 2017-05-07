package com.ds.search;

public class InterpolationSearch {
	public static void main(String[] args) {
		DataSet dataSet = new DataSet(100000000);
		int search = 17;
		Boolean isFound = false;

		// dataSet.data = new int[10];
		// dataSet.data[0]=1;
		// dataSet.data[1]=2;
		// dataSet.data[2]=3;
		// dataSet.data[3]=4;
		// dataSet.data[4]=5;
		// dataSet.data[5]=6;
		// dataSet.data[6]=8;
		// dataSet.data[7]=9;
		// dataSet.data[8]=10;
		// dataSet.data[9]=11;

		// The formula is `mid = low +
		// ((high-low)/(a[high]-a[low]))*(search-a[low]);`

		int low = 0;
		int mid = 0;
		// int high = 9;
		int high = dataSet.getSize() - 1;

		while (!isFound) {
			dataSet.numberTry++;
			if (low > high) {
				System.out.println("The number doesn't exist.");
				break;
			}

			mid = low + ((high - low) / (dataSet.data[high] - dataSet.data[low]))
					* (search - dataSet.data[low]);

			if (mid > high) {
				System.out.println("The number doesn't exist.");
				break;
			}

			System.out.println("low: " + low);
			System.out.println("high: " + high);
			System.out.println("mid: " + mid);

			if (dataSet.data[mid] < search) {
				low = mid + 1;
			} else if (dataSet.data[mid] > search) {
				high = mid - 1;
			} else {
				System.out
						.println("The number has been found after " + dataSet.numberTry + " try.");
				isFound = true;
				break;
			}
		}
	}

}
