import java.util.Scanner;

class js {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String arr[];
        while(sc.hasNextLine() == true) {
            arr.push(sc.nextLine());
        }
        System.out.println(arr);
    }
}