import java.util.Scanner;
import java.lang.Math;
class Hotel {
  //Doing the search for bookings in a separate method
  //You can only check your reservation staight after getting it
  public static void bookingSearch(String customerName, int roomChoice) {
    Scanner reader = new Scanner(System.in);
    System.out.print("Please enter your name: ");
    String customer = reader.nextLine();
    String room = " ";
    if(roomChoice == 1){
            room = "Single room";
          } else if(roomChoice == 2){
            room = "Double room";
          } else if(roomChoice == 3){
            room = "VIP-suite";
          } else {
            System.out.println("Room not found.");
          }
    if(customer.equals(customerName)){
      System.out.print(customer+" has reserved a "+room);
    } else {
      System.out.print("Customer not found.");
    }


  }
   public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String roomType[] = {"Single room", "Double room", "VIP suite"};
        double roomPrice[] = {100, 150, 300};
        int countRooms[] = {40, 50, 10};

       //using a boolean while loop to check
       while(true) {
        //the menu
         System.out.println("\n Welcome to Hotel Tamk!");
         System.out.println(".....................................");
         System.out.println("Press         Room type       Price");
         System.out.println("1             Single room     100€");
         System.out.println("2             Double room     150€");
         System.out.println("3             VIP-suite       300€");
         System.out.println(".....................................");

          System.out.print("Which type of room would you like to reserve?: ");
         
          int choice = scan.nextInt();
          double price = 0;
          String room = " ";

          //using if/else if/else to verify which type of room is being booked
          
          if(choice == 1){
            room = roomType[0];
            price = roomPrice[0];
          } else if(choice == 2){
            room = roomType[1];
            price = roomPrice[1];
          } else if(choice == 3){
            room = roomType[2];
            price = roomPrice[2];
          } else {
            System.out.println("Invalid input. Please enter number 1, 2 or 3.");
            scan.next();
            continue;
          }

          //checking if the room of choice is available

          if(choice>0 && choice<=3) {
            if(countRooms[choice-1] == 0){
                System.out.println("Unfortunately we don't have this kind of room available. Do you want to book another room? Press 1 for YES and any other number to EXIT.");
                int newBooking = scan.nextInt();
                if(newBooking == 1) {
                  continue;
                } else {
                  break;
                }

            } else {
              //substracting the booked room from the room counts
              countRooms[choice-1]--;

              //asking the information for the reciept
              System.out.print("How many nights will you stay?: ");
              //using a while loop with .hasNextInt() to make sure the answer will be an integer
              while(!scan.hasNextInt()){
                System.out.println("Invalid input. Please enter the nights in numbers.");
                scan.next();
              }
              int nights = scan.nextInt();
              scan.nextLine();
              System.out.print("What name is the reservation under?: ");
              String name = scan.nextLine();
              printReceipt(name,roomType[choice-1],nights,roomPrice[choice-1]);
              System.out.println(".....................................");
              System.out.println();
              System.out.print("Do you want to check your reservation from your name? Press 1 for YES and any other number to EXIT.");
              int check = scan.nextInt();
              if(check == 1){
                bookingSearch(name, choice);
                continue;
              } else {
                continue;
              }
            }
          }
         

       
        }

    }
    //using a separate printReceipt method to print the final receipt
    public static void printReceipt(String name, String roomType, int nights, double price){
      
      //getting the random reservation number
      int max = 99999;
      int min = 10000;
      int range = (max-min)+1;
      int resNum = (int)(Math.random()*range)+min;

      
      System.out.println();
      System.out.println();
      System.out.println("===============================================");
      System.out.println("                    RECEIPT                    ");
      System.out.println("===============================================");
      System.out.println();
      System.out.println("        Reservation number: "+resNum);
      System.out.println("        Name: "+name);
      System.out.println("        Room: "+roomType);
      System.out.println("        Number of nights: "+nights);
      System.out.println();
      System.out.println("           . . . . . . . . . . . . . ");
      System.out.println();
      //calculating the cost of the stay based on the prices in the menu and nights reserved
      double totalCost = nights*price; 
      System.out.println("        Total cost: "+totalCost);
      System.out.println();
      System.out.println("           . . . . . . . . . . . . . ");
      System.out.println();
      System.out.println("       Thank you for choosing Hotel Tamk!");
      System.out.println("        We hope you will enjoy your stay!");
      System.out.println();
      System.out.println("===============================================");

    }
}


