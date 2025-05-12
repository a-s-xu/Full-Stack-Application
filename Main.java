import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.sql.*;

import java.net.InetSocketAddress;
import java.util.Map;
class Main {

 public static void main(String[] args)throws IOException{
    (new Main()).init();
  }

  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init() throws IOException{   

    //---------
     // MADE
     // BY YEAH YEAH
     // ALEXANDER
     // XU
     

    //----------------------------- Pre-existing Code Above ---------------------------------//
    int port = 8500;
    HttpServer server = HttpServer.create(new InetSocketAddress(port),0);

    //Linking new DB//
    Database db = new Database("jdbc:sqlite:project.db");

    //Pre-existing Code//
    server.createContext("/", new RouteHandler("Default route...") );


    // SQL argument for GPUS//
    String sql = "";
    sql  = " Select * from Gpus ";
    server.createContext("/Gpus", new RouteHandler(db,sql) );

    // SQL argument for CPUS//
    sql  = " Select * from Cpus ";
    server.createContext("/Cpus", new RouteHandler(db,sql) );

    // SQL argument for Psus//
    sql  = " Select * from Psus ";
    server.createContext("/Psus", new RouteHandler(db,sql) );

    //SQL argument for Slideshows (homepage)  [WOULD NOT BE USED]]//
    sql = "Select CpuIMG, GpuIMG, PsIMG FROM Cpus INNER JOIN Gpus ON Gpus.ProductID = Cpus.ProductID INNER JOIN Psus ON Psus.ProductID = Gpus.ProductID LIMIT 1";
    server.createContext("/Slideshow", new RouteHandler(db,sql) );
    
    //SQL argument for Optimal Compatibility//
    sql = "Select * FROM Cpus INNER JOIN Gpus ON Gpus.ProductID = Cpus.ProductID";
    server.createContext("/Compatibility", new RouteHandler(db,sql) );
    
    //SQL argument for Database Page//
    sql = "Select * FROM Cpus INNER JOIN Gpus ON Gpus.ProductID = Cpus.ProductID INNER JOIN Psus ON Psus.ProductID = Gpus.ProductID";
    server.createContext("/allData", new RouteHandler(db,sql) );
    
    // Start the server      
    server.start();
    System.out.println("Server is listening on port " + port);      
    //---------------------------------------- END ------------------------------------------//
  }    
}


