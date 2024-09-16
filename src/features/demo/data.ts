import type {
  Data,
  ECommerce,
  Education,
  SaaS,
  Healthcare,
  Hospitality,
  Marketplace,
  Resource,
} from "./types";

/* ***************** */
/* E-COMMERCE DATA */

const eCommerceResources: Resource[] = [
  {
    question: "About us",
    answer:
      " Helpnode commerce is an online marketplace that offers a wide range of products, from electronics and fashion to home goods and beauty products. Our mission is to provide a seamless shopping experience with high-quality products and exceptional customer service.",
  },

  {
    question: "Contact",
    answer:
      " You can contact our customer support team via email at support@Helpnodecommerce.com or call us at 1-800-123-4567. Our support team is available Monday to Friday from 9 AM to 6 PM.",
  },

  {
    question: "How to place an order",
    answer:
      "To place an order, browse our catalog, select the items you wish to purchase, and add them to your cart. Once you’re ready, click on the cart icon and proceed to checkout, where you'll enter your shipping information and payment details.",
  },

  {
    question: "Accepted payment methods",
    answer:
      "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other digital payment methods like Apple Pay and Google Pay.",
  },

  {
    question: "Order modification or cancel",
    answer:
      "Orders can be modified or canceled within one hour of placing them. Please contact our customer support team immediately if you need to make changes.",
  },

  {
    question: "Our shipping options",
    answer:
      "We offer standard, expedited, and overnight shipping options. Shipping costs and delivery times vary depending on the destination and the shipping method selected at checkout. ",
  },

  {
    question: "Tracking the order",
    answer:
      "Once your order is shipped, you'll receive a tracking number via email. You can use this tracking number to monitor the status of your delivery on our website or the carrier’s website.",
  },

  {
    question: "International shipping",
    answer:
      "Yes, we ship to select international locations. Shipping costs and delivery times will be calculated at checkout based on your location.",
  },
];

const eCommerceData: ECommerce = {
  Resources: eCommerceResources,
  apiKey: "eSifoTQjx5XsBgIT8CUJnRa2RBYM5Tc6zxbjUS5qUJbqAAznmt4uq8-hvw",
  agentId: "20",

  Products: {
    title: "Products Table",
    description:
      "This table contains detailed information about each product available in the e-commerce store.",
    data: [
      {
        Product_ID: 1,
        Product_Name: "Wireless Bluetooth Headphones",
        Category: "Electronics",
        Brand: "Bose",
        Price: "$150",
        Stock: 250,
        Rating: 4.7,
        Description: "Noise-cancelling, over-ear headphones",
        Is_Discounted: true,
        Discount_Percentage: "10%",
      },
      {
        Product_ID: 2,
        Product_Name: "Organic Cotton T-Shirt",
        Category: "Clothing",
        Brand: "H&M",
        Price: "$20",
        Stock: 500,
        Rating: 4.5,
        Description: "100% organic cotton, eco-friendly",
        Is_Discounted: false,
        Discount_Percentage: "0%",
      },
      {
        Product_ID: 3,
        Product_Name: "Gaming Laptop",
        Category: "Computers",
        Brand: "ASUS",
        Price: "$1200",
        Stock: 50,
        Rating: 4.8,
        Description: "High-performance laptop for gaming",
        Is_Discounted: true,
        Discount_Percentage: "5%",
      },
      {
        Product_ID: 4,
        Product_Name: "Stainless Steel Water Bottle",
        Category: "Home & Kitchen",
        Brand: "Hydro Flask",
        Price: "$35",
        Stock: 300,
        Rating: 4.9,
        Description: "Insulated, keeps drinks cold or hot",
        Is_Discounted: false,
        Discount_Percentage: "0%",
      },
      {
        Product_ID: 5,
        Product_Name: "Running Shoes",
        Category: "Footwear",
        Brand: "Nike",
        Price: "$100",
        Stock: 150,
        Rating: 4.6,
        Description: "Lightweight, breathable running shoes",
        Is_Discounted: true,
        Discount_Percentage: "15%",
      },
    ],
  },
  Customers: {
    title: "Customers Table",
    description:
      "This table tracks customer information, including loyalty status and contact details.",
    data: [
      {
        Customer_ID: 1,
        Username: "Shopper123",
        Email: "shopper123@example.com",
        Phone_Number: "555-1234",
        Loyalty_Status: "Platinum",
        Country: "USA",
        Date_Of_Birth: "1990-05-15",
        VIP_Status: true,
      },
      {
        Customer_ID: 2,
        Username: "Fashionista99",
        Email: "fashionista99@example.com",
        Phone_Number: "555-5678",
        Loyalty_Status: "Gold",
        Country: "UK",
        Date_Of_Birth: "1985-09-10",
        VIP_Status: false,
      },
      {
        Customer_ID: 3,
        Username: "TechGuru2024",
        Email: "techguru@example.com",
        Phone_Number: "555-8765",
        Loyalty_Status: "Silver",
        Country: "Canada",
        Date_Of_Birth: "1992-11-22",
        VIP_Status: false,
      },
      {
        Customer_ID: 4,
        Username: "HomeCook",
        Email: "homecook@example.com",
        Phone_Number: "555-4321",
        Loyalty_Status: "Bronze",
        Country: "Australia",
        Date_Of_Birth: "1988-07-30",
        VIP_Status: true,
      },
      {
        Customer_ID: 5,
        Username: "FitnessFan",
        Email: "fitnessfan@example.com",
        Phone_Number: "555-3456",
        Loyalty_Status: "Gold",
        Country: "Germany",
        Date_Of_Birth: "1995-12-12",
        VIP_Status: true,
      },
    ],
  },
  Orders: {
    title: "Orders Table",
    description:
      "This table logs order information, including status and payment details.",
    data: [
      {
        Order_ID: 1,
        Customer_ID: 1,
        Order_Date: "2024-08-01",
        Total_Amount: "$180",
        Order_Status: "Completed",
        Payment_Method: "Credit Card",
        Shipping_Address: "123 Main St, NY, USA",
        Shipping_Status: "Shipped",
        Tracking_Number: "TRACK123456789",
        Delivery_Estimate: "2024-08-05",
      },
      {
        Order_ID: 2,
        Customer_ID: 1,
        Order_Date: "2024-08-03",
        Total_Amount: "$30",
        Order_Status: "Pending",
        Payment_Method: "PayPal",
        Shipping_Address: "123 Main St, NY, USA",
        Shipping_Status: "Processing",
        Tracking_Number: null,
        Delivery_Estimate: "2024-08-10",
      },
      {
        Order_ID: 3,
        Customer_ID: 1,
        Order_Date: "2024-08-04",
        Total_Amount: "$1250",
        Order_Status: "Completed",
        Payment_Method: "Bank Transfer",
        Shipping_Address: "123 Main St, NY, USA",
        Shipping_Status: "Shipped",
        Tracking_Number: "TRACK987654321",
        Delivery_Estimate: "2024-08-08",
      },
      {
        Order_ID: 4,
        Customer_ID: 1,
        Order_Date: "2024-08-05",
        Total_Amount: "$45",
        Order_Status: "Completed",
        Payment_Method: "Credit Card",
        Shipping_Address: "123 Main St, NY, USA",
        Shipping_Status: "Delivered",
        Tracking_Number: "TRACK112233445",
        Delivery_Estimate: "2024-08-07",
      },
      {
        Order_ID: 5,
        Customer_ID: 1,
        Order_Date: "2024-08-07",
        Total_Amount: "$85",
        Order_Status: "Canceled",
        Payment_Method: "Bitcoin",
        Shipping_Address: "123 Main St, NY, USA",
        Shipping_Status: "Not Shipped",
        Tracking_Number: null,
        Delivery_Estimate: null,
      },
      {
        Order_ID: 6,
        Customer_ID: 2,
        Order_Date: "2024-08-04",
        Total_Amount: "$1250",
        Order_Status: "Completed",
        Payment_Method: "Bitcoin",
        Shipping_Address: "STOCKPORT, SK25 7HX, UK",
        Shipping_Status: "Shipped",
        Tracking_Number: "TRACK97655321",
        Delivery_Estimate: "2024-08-08",
      },
      {
        Order_ID: 7,
        Customer_ID: 4,
        Order_Date: "2024-08-05",
        Total_Amount: "$75",
        Order_Status: "Completed",
        Payment_Method: "Credit Card",
        Shipping_Address: "3/4 Kenny St. AUS",
        Shipping_Status: "Delivered",
        Tracking_Number: "TRACK114324234",
        Delivery_Estimate: "2024-08-07",
      },
      {
        Order_ID: 8,
        Customer_ID: 5,
        Order_Date: "2024-08-07",
        Total_Amount: "$105",
        Order_Status: "Canceled",
        Payment_Method: "PayPal",
        Shipping_Address: "Bochumer Strasse 79",
        Shipping_Status: "Not Shipped",
        Tracking_Number: null,
        Delivery_Estimate: null,
      },
    ],
  },
  Payments: {
    title: "Payments Table",
    description:
      "This table manages payment transactions, including failure reasons if applicable.",
    data: [
      {
        Payment_ID: 1,
        Order_ID: 1,
        Customer_ID: 1,
        Payment_Date: "2024-08-01",
        Amount: "$180",
        Payment_Method: "Credit Card",
        Payment_Status: "Completed",
        Transaction_ID: "PAY123456789",
        Failure_Reason: null,
      },
      {
        Payment_ID: 2,
        Order_ID: 2,
        Customer_ID: 1,
        Payment_Date: "2024-08-03",
        Amount: "$30",
        Payment_Method: "PayPal",
        Payment_Status: "Pending",
        Transaction_ID: "PAY987654321",
        Failure_Reason: null,
      },
      {
        Payment_ID: 3,
        Order_ID: 3,
        Customer_ID: 1,
        Payment_Date: "2024-08-04",
        Amount: "$1250",
        Payment_Method: "Bank Transfer",
        Payment_Status: "Completed",
        Transaction_ID: "PAY112233445",
        Failure_Reason: null,
      },
      {
        Payment_ID: 4,
        Order_ID: 4,
        Customer_ID: 1,
        Payment_Date: "2024-08-05",
        Amount: "$45",
        Payment_Method: "Credit Card",
        Payment_Status: "Completed",
        Transaction_ID: "PAY998877665",
        Failure_Reason: null,
      },
      {
        Payment_ID: 5,
        Order_ID: 5,
        Customer_ID: 1,
        Payment_Date: "2024-08-07",
        Amount: "$85",
        Payment_Method: "Bitcoin",
        Payment_Status: "Failed",
        Transaction_ID: "PAY554433221",
        Failure_Reason: "Insufficient Funds",
      },
      {
        Payment_ID: 6,
        Order_ID: 5,
        Customer_ID: 1,
        Payment_Date: "2024-08-07",
        Amount: "$85",
        Payment_Method: "Credit Card",
        Payment_Status: "Failed",
        Transaction_ID: "PAY776655443",
        Failure_Reason: "Incorrect Payment Details",
      },
      {
        Payment_ID: 7,
        Order_ID: 6,
        Customer_ID: 2,
        Payment_Date: "2024-08-04",
        Amount: "$1250",
        Payment_Method: "Bitcoin",
        Payment_Status: "Completed",
        Transaction_ID: "PAY112233445",
        Failure_Reason: null,
      },
      {
        Payment_ID: 8,
        Order_ID: 7,
        Customer_ID: 4,
        Payment_Date: "2024-08-05",
        Amount: "$75",
        Payment_Method: "Credit Card",
        Payment_Status: "Completed",
        Transaction_ID: "PAY998877665",
        Failure_Reason: null,
      },
      {
        Payment_ID: 9,
        Order_ID: 8,
        Customer_ID: 5,
        Payment_Date: "2024-08-07",
        Amount: "$105",
        Payment_Method: "PayPal",
        Payment_Status: "Failed",
        Transaction_ID: "PAY554433221",
        Failure_Reason: "Insufficient Funds",
      },
    ],
  },

  SupportTickets: {
    title: "Support Tickets Table",
    description:
      "This table logs customer support requests and their resolutions.",
    data: [
      {
        Ticket_ID: 1,
        Customer_ID: 1,
        Issue_Type: "Order Delay",
        Description: "My order hasn't arrived yet.",
        Date_Submitted: "2024-08-02",
        Resolution_Status: "Resolved",
        Resolution_Description: "Order delivered on 2024-08-05.",
      },
      {
        Ticket_ID: 2,
        Customer_ID: 1,
        Issue_Type: "Payment Issue",
        Description: "My payment is still pending.",
        Date_Submitted: "2024-08-03",
        Resolution_Status: "Pending",
        Resolution_Description: "Issue under investigation.",
      },
      {
        Ticket_ID: 3,
        Customer_ID: 1,
        Issue_Type: "Product Issue",
        Description: "Received a damaged product.",
        Date_Submitted: "2024-08-04",
        Resolution_Status: "Resolved",
        Resolution_Description: "Replacement product shipped on 2024-08-06.",
      },
      {
        Ticket_ID: 4,
        Customer_ID: 1,
        Issue_Type: "Cancellation Request",
        Description: "I want to cancel my order.",
        Date_Submitted: "2024-08-05",
        Resolution_Status: "Resolved",
        Resolution_Description: "Order canceled and refund processed.",
      },
      {
        Ticket_ID: 5,
        Customer_ID: 1,
        Issue_Type: "Payment Failure",
        Description: "My payment failed but the amount was deducted.",
        Date_Submitted: "2024-08-07",
        Resolution_Status: "Resolved",
        Resolution_Description: "Refund issued on 2024-08-08.",
      },
    ],
  },
  UpcomingEventsPromotions: {
    title: "Upcoming Events & Promotions Table",
    description: "This table logs upcoming events and promotions.",
    data: [
      {
        Event_ID: 1,
        Event_Name: "Summer Clearance Sale",
        Event_Type: "Seasonal Sale",
        Start_Date: "2024-08-15",
        End_Date: "2024-08-31",
        Discount_Percentage: "50%",
        Applicable_Categories: "Clothing, Shoes, Accessories",
        Promo_Code: "SUMMER50",
        Description: "Get up to 50% off on selected summer items.",
      },
      {
        Event_ID: 2,
        Event_Name: "Back to School Promo",
        Event_Type: "Limited-Time Offer",
        Start_Date: "2024-09-01",
        End_Date: "2024-09-10",
        Discount_Percentage: "30%",
        Applicable_Categories: "Stationery, Electronics",
        Promo_Code: "SCHOOL30",
        Description: "30% off on back-to-school essentials.",
      },
      {
        Event_ID: 3,
        Event_Name: "Black Friday Blowout",
        Event_Type: "Major Sale",
        Start_Date: "2024-11-25",
        End_Date: "2024-11-29",
        Discount_Percentage: "70%",
        Applicable_Categories: "All Categories",
        Promo_Code: "BLACKFRIDAY",
        Description: "Massive discounts across all categories. Limited stock!",
      },
      {
        Event_ID: 4,
        Event_Name: "Cyber Monday Special",
        Event_Type: "Online Exclusive",
        Start_Date: "2024-12-01",
        End_Date: "2024-12-02",
        Discount_Percentage: "60%",
        Applicable_Categories: "Electronics, Gadgets",
        Promo_Code: "CYBERMONDAY",
        Description: "Exclusive online deals on electronics. One day only!",
      },
    ],
  },
};

/* ***************** */
/* MARKETPLACE DATA */

const marketplaceResources: Resource[] = [
  {
    question: "How to create an account",
    answer:
      "To create an account, click on the 'Sign Up' button on our homepage. Fill in your details, including your name, email, and password, then follow the prompts to verify your email and complete the registration.",
  },
  {
    question: "How to place an order",
    answer:
      "To place an order, browse our products, add the desired items to your cart, and proceed to checkout. Follow the instructions to enter your shipping information and payment details, then confirm your order.",
  },
  {
    question: "Tracking an order",
    answer:
      "You can track your order through the 'My Orders' section in your account. Once your order has been shipped, you will receive a tracking number via email, which you can use to monitor the delivery status.",
  },
  {
    question: "Delayed or Missing order",
    answer:
      "If your order is delayed or missing, first check the tracking information provided. If you still need assistance, contact our customer support team with your order details, and we will help resolve the issue.",
  },
  {
    question: "Return and refund policy",
    answer:
      "We accept returns within 30 days of delivery for most items. To initiate a return, go to the 'My Orders' section, select the item you want to return, and follow the instructions. Refunds are processed within 5-7 business days after we receive the returned item.",
  },
  {
    question: "How to become a seller",
    answer:
      "To become a seller, click on the 'Sell with Us' link and complete the registration form. Provide your business information, agree to our terms and conditions, and submit your application. Once approved, you can start listing your products.",
  },
  {
    question: "How to list an item for sale",
    answer:
      "To list an item, log into your seller account, go to the 'Add New Product' section, and fill in the required details, including product title, description, price, and photos. Once submitted, your listing will be reviewed and published on our marketplace.",
  },
  {
    question: "Shipping and handling management",
    answer:
      "As a seller, you can choose to handle shipping yourself or use our fulfillment services. If you handle shipping, ensure timely dispatch and provide tracking information. If using our services, we will manage packing and shipping on your behalf.",
  },
  {
    question: "Fees for sellers",
    answer:
      "Sellers are charged a commission fee on each sale and may incur additional fees for listing upgrades or promotional features. Detailed fee information is available in the 'Seller Fees' section of our website.",
  },
  {
    question: "Managing refunds and returns as a seller",
    answer:
      "As a seller, you are responsible for handling returns and refunds according to our marketplace policies. Ensure you communicate clearly with buyers and process returns and refunds promptly to maintain a positive seller rating.",
  },
  {
    question: "Accepted payment methods",
    answer:
      "We accept major credit cards, debit cards, PayPal, and other secure payment options. During checkout, you can select your preferred payment method from the available options.",
  },
  {
    question: "Payment information security",
    answer:
      "We use industry-standard encryption and security measures to protect your payment information. Your details are processed securely, and we do not store sensitive payment data.",
  },
  {
    question: "Processing payment",
    answer:
      "Payments are processed immediately upon completing your order. You will receive a confirmation email with your order and payment details.",
  },
  {
    question: "Gift cards and promo codes",
    answer:
      "During checkout, enter your gift card or promo code in the designated field and click 'Apply.' The discount or credit will be deducted from your total order amount.",
  },
  {
    question: "Payment issues",
    answer:
      "If you encounter a payment issue, check that your payment information is correct and try again. If the problem persists, contact our customer support team for assistance.",
  },
  {
    question: "Updating account information",
    answer:
      "To update your account information, log into your account and go to the 'Account Settings' section. Here, you can update your personal details, shipping addresses, and payment methods.",
  },
  {
    question: "Resetting password",
    answer:
      "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address, and you will receive a link to reset your password.",
  },
  {
    question: "Our privacy policy",
    answer:
      "Our privacy policy outlines how we collect, use, and protect your personal information. You can read the full policy on our website under the 'Privacy Policy' section.",
  },
  {
    question: "Deactivating or deleting your account",
    answer:
      "To deactivate or delete your account, contact our customer support team with your request. Please note that once your account is deleted, it cannot be restored.",
  },
  {
    question: "Managing email preferences",
    answer:
      "To manage your email preferences, log into your account and go to the 'Email Preferences' section. Here, you can choose which types of emails you would like to receive or unsubscribe from all marketing communications.",
  },
  {
    question: "Policy on counterfeit or prohibited items",
    answer:
      "We have strict policies against counterfeit and prohibited items. Sellers found violating these policies will be subject to penalties, including account suspension. For more details, refer to our 'Prohibited Items Policy' on our website.",
  },
  {
    question: "Leaving feedback for a seller or product",
    answer:
      "After receiving your order, you can leave feedback for the seller or product through the 'My Orders' section. Select the order and follow the prompts to submit your review and rating.",
  },
  {
    question: "Buyer protection",
    answer:
      "We offer buyer protection for eligible purchases. If you encounter an issue with your order, such as non-delivery or item not as described, contact our customer support team for assistance.",
  },
  {
    question: "Deals and promotions",
    answer:
      "Check our website regularly for special deals and promotions. You can also sign up for our newsletter to receive updates on the latest offers and discounts.",
  },
];

const marketplaceData: Marketplace = {
  Resources: marketplaceResources,
  apiKey: "s01_VnFD7obmWki4F8xkBcK5CIre509ZlMVOG6McIIT0RFHU95z1eXgPLg",
  agentId: "25",

  Sellers: {
    title: "Sellers Table",
    description:
      "This table contains information about each seller on the marketplace.",
    data: [
      {
        Seller_ID: 1,
        Seller_Name: "John Doe",
        Contact_Email: "johndoe@example.com",
        Phone_Number: "555-1239",
        Store_Name: "John's Electronics",
        Rating: 4.7,
        Total_Sales: 1500,
        Country: "USA",
        Join_Date: "2020-01-15",
      },
      {
        Seller_ID: 2,
        Seller_Name: "Sarah Smith",
        Contact_Email: "sarahsmith@example.com",
        Phone_Number: "555-5678",
        Store_Name: "Sarah's Boutique",
        Rating: 4.5,
        Total_Sales: 900,
        Country: "UK",
        Join_Date: "2019-11-20",
      },
      {
        Seller_ID: 3,
        Seller_Name: "Tech Masters",
        Contact_Email: "techmasters@example.com",
        Phone_Number: "555-8765",
        Store_Name: "Tech World",
        Rating: 4.8,
        Total_Sales: 2200,
        Country: "Canada",
        Join_Date: "2021-03-22",
      },
      {
        Seller_ID: 4,
        Seller_Name: "Home Essentials",
        Contact_Email: "homeessentials@example.com",
        Phone_Number: "555-4321",
        Store_Name: "Home Comforts",
        Rating: 4.6,
        Total_Sales: 1800,
        Country: "Australia",
        Join_Date: "2020-07-30",
      },
      {
        Seller_ID: 5,
        Seller_Name: "Fitness First",
        Contact_Email: "fitnessfirst@example.com",
        Phone_Number: "555-3456",
        Store_Name: "Fit Gear",
        Rating: 4.9,
        Total_Sales: 2500,
        Country: "Germany",
        Join_Date: "2019-05-12",
      },
    ],
  },
  Products: {
    title: "Products Table",
    description:
      "This table contains detailed information about each product available on the marketplace.",
    data: [
      {
        Product_ID: 1,
        Seller_ID: 1,
        Product_Name: "Wireless Bluetooth Headphones",
        Category: "Electronics",
        Price: "$150",
        Stock: 250,
        Rating: 4.7,
        Description: "Noise-cancelling, over-ear headphones",
        Is_Discounted: true,
        Discount_Percentage: "10%",
        Returnable: true,
      },
      {
        Product_ID: 2,
        Seller_ID: 2,
        Product_Name: "Organic Cotton T-Shirt",
        Category: "Clothing",
        Price: "$20",
        Stock: 500,
        Rating: 4.5,
        Description: "100% organic cotton, eco-friendly",
        Is_Discounted: false,
        Discount_Percentage: "0%",
        Returnable: true,
      },
      {
        Product_ID: 3,
        Seller_ID: 3,
        Product_Name: "Gaming Laptop",
        Category: "Computers",
        Price: "$1200",
        Stock: 50,
        Rating: 4.8,
        Description: "High-performance laptop for gaming",
        Is_Discounted: true,
        Discount_Percentage: "5%",
        Returnable: false,
      },
      {
        Product_ID: 4,
        Seller_ID: 4,
        Product_Name: "Stainless Steel Water Bottle",
        Category: "Home & Kitchen",
        Price: "$35",
        Stock: 300,
        Rating: 4.9,
        Description: "Insulated, keeps drinks cold or hot",
        Is_Discounted: false,
        Discount_Percentage: "0%",
        Returnable: true,
      },
      {
        Product_ID: 5,
        Seller_ID: 5,
        Product_Name: "Running Shoes",
        Category: "Footwear",
        Price: "$100",
        Stock: 150,
        Rating: 4.6,
        Description: "Lightweight, breathable running shoes",
        Is_Discounted: true,
        Discount_Percentage: "15%",
        Returnable: true,
      },
    ],
  },
  Customers: {
    title: "Customers Table",
    description:
      "This table tracks customer information, including their loyalty status and contact details.",
    data: [
      {
        Customer_ID: 1,
        Username: "Shopper123",
        Email: "shopper123@example.com",
        Phone_Number: "555-1234",
        Loyalty_Status: "Platinum",
        Country: "USA",
        Date_Of_Birth: "1990-05-15",
        VIP_Status: true,
      },
      {
        Customer_ID: 2,
        Username: "Fashionista99",
        Email: "fashionista99@example.com",
        Phone_Number: "555-5678",
        Loyalty_Status: "Gold",
        Country: "UK",
        Date_Of_Birth: "1985-09-10",
        VIP_Status: false,
      },
      {
        Customer_ID: 3,
        Username: "TechGuru2024",
        Email: "techguru@example.com",
        Phone_Number: "555-8765",
        Loyalty_Status: "Silver",
        Country: "Canada",
        Date_Of_Birth: "1992-11-22",
        VIP_Status: false,
      },
      {
        Customer_ID: 4,
        Username: "HomeCook",
        Email: "homecook@example.com",
        Phone_Number: "555-4321",
        Loyalty_Status: "Bronze",
        Country: "Australia",
        Date_Of_Birth: "1988-07-30",
        VIP_Status: true,
      },
      {
        Customer_ID: 5,
        Username: "FitnessFan",
        Email: "fitnessfan@example.com",
        Phone_Number: "555-3456",
        Loyalty_Status: "Gold",
        Country: "Germany",
        Date_Of_Birth: "1995-12-12",
        VIP_Status: true,
      },
    ],
  },
  Orders: {
    title: "Orders Table",
    description:
      "This table logs order information, including status and payment details.",
    data: [
      {
        Order_ID: 1,
        Customer_ID: 1,
        Seller_ID: 1,
        Order_Date: "2024-08-01",
        Total_Amount: "$180",
        Order_Status: "Completed",
        Payment_Method: "Credit Card",
        Shipping_Address: "123 Main St, NY, USA",
        Shipping_Status: "Shipped",
        Tracking_Number: "TRACK123456789",
        Delivery_Estimate: "2024-08-05",
      },
      {
        Order_ID: 2,
        Customer_ID: 1,
        Seller_ID: 2,
        Order_Date: "2024-08-03",
        Total_Amount: "$30",
        Order_Status: "Pending",
        Payment_Method: "PayPal",
        Shipping_Address: "456 High St, London, UK",
        Shipping_Status: "Processing",
        Tracking_Number: null,
        Delivery_Estimate: "2024-08-10",
      },
      {
        Order_ID: 3,
        Customer_ID: 3,
        Seller_ID: 3,
        Order_Date: "2024-08-04",
        Total_Amount: "$1250",
        Order_Status: "Completed",
        Payment_Method: "Bank Transfer",
        Shipping_Address: "789 Elm St, Toronto, CA",
        Shipping_Status: "Shipped",
        Tracking_Number: "TRACK987654321",
        Delivery_Estimate: "2024-08-08",
      },
      {
        Order_ID: 4,
        Customer_ID: 4,
        Seller_ID: 4,
        Order_Date: "2024-08-05",
        Total_Amount: "$45",
        Order_Status: "Completed",
        Payment_Method: "Credit Card",
        Shipping_Address: "321 Oak St, Sydney, AUS",
        Shipping_Status: "Delivered",
        Tracking_Number: "TRACK112233445",
        Delivery_Estimate: "2024-08-07",
      },
      {
        Order_ID: 5,
        Customer_ID: 5,
        Seller_ID: 5,
        Order_Date: "2024-08-07",
        Total_Amount: "$85",
        Order_Status: "Canceled",
        Payment_Method: "Bitcoin",
        Shipping_Address: "654 Pine St, Berlin, GER",
        Shipping_Status: "Not Shipped",
        Tracking_Number: null,
        Delivery_Estimate: null,
      },
    ],
  },
  Payments: {
    title: "Payments Table",
    description:
      "This table manages payment transactions, including failure reasons if applicable.",
    data: [
      {
        Payment_ID: 1,
        Order_ID: 1,
        Customer_ID: 1,
        Payment_Date: "2024-08-01",
        Amount: "$180",
        Payment_Method: "Credit Card",
        Payment_Status: "Completed",
        Transaction_Reference: "PAY123456789",
        Failure_Reason: null,
      },
      {
        Payment_ID: 2,
        Order_ID: 2,
        Customer_ID: 1,
        Payment_Date: "2024-08-03",
        Amount: "$30",
        Payment_Method: "PayPal",
        Payment_Status: "Pending",
        Transaction_Reference: "PAY987654321",
        Failure_Reason: null,
      },
      {
        Payment_ID: 3,
        Order_ID: 3,
        Customer_ID: 3,
        Payment_Date: "2024-08-04",
        Amount: "$1250",
        Payment_Method: "Bank Transfer",
        Payment_Status: "Completed",
        Transaction_Reference: "PAY112233445",
        Failure_Reason: null,
      },
      {
        Payment_ID: 4,
        Order_ID: 4,
        Customer_ID: 4,
        Payment_Date: "2024-08-05",
        Amount: "$45",
        Payment_Method: "Credit Card",
        Payment_Status: "Completed",
        Transaction_Reference: "PAY998877665",
        Failure_Reason: null,
      },
      {
        Payment_ID: 5,
        Order_ID: 5,
        Customer_ID: 5,
        Payment_Date: "2024-08-07",
        Amount: "$85",
        Payment_Method: "Bitcoin",
        Payment_Status: "Failed",
        Transaction_Reference: "PAY554433221",
        Failure_Reason: "Insufficient Funds",
      },
    ],
  },
};

/* ***************** */
/* HEALTHCARE DATA */

const healthcareResources: Resource[] = [
  {
    question: "Scheduling an appointment",
    answer:
      "To schedule an appointment, call our main line or use our online booking system. Provide your personal information, the reason for your visit, and preferred dates and times. You will receive a confirmation of your appointment once it's scheduled.",
  },
  {
    question: "Can I see a specialist without a referral?",
    answer:
      "Some specialists require a referral from your primary care physician. Please check with our scheduling department or your insurance provider to determine if a referral is necessary for the specialist you wish to see.",
  },
  {
    question: "Canceling/Rescheduling the appointment",
    answer:
      "To cancel or reschedule an appointment, contact our scheduling department by phone or through our online portal. Provide your appointment details and the new preferred date and time.",
  },
  {
    question: "What to bring for the first appointment",
    answer:
      "For your first appointment, please bring your identification, insurance card, any relevant medical records, and a list of medications you are currently taking.",
  },
  {
    question: "Visiting hours",
    answer: "Visiting hours for our Hospital are from 9:00 AM to 8:00 PM.",
  },
  {
    question: "Accepted insurance plans",
    answer:
      "We accept a variety of insurance plans, including major health insurers. Please contact our billing department or visit our website for a list of accepted insurance providers.",
  },
  {
    question: "How to pay the bill",
    answer:
      "You can pay your bill online through our patient portal, by mail, or in person at our billing office. We accept major credit cards, debit cards, and checks.",
  },
  {
    question: "Financial assistance and payment plans",
    answer:
      "We offer financial assistance and payment plans for eligible patients.",
  },
  {
    question: "How to get a copy of the medical bill",
    answer:
      "You can request a copy of your medical bill through our patient portal or by contacting our billing department. We can provide detailed statements of your charges and payments.",
  },
  {
    question: "Insurance coverage",
    answer:
      "If you have questions about your insurance coverage, contact our billing department or your insurance provider directly. We can help clarify any charges and ensure that your insurance is applied correctly.",
  },
  {
    question: "How to request medical records",
    answer:
      "To request your medical records, complete a medical records release form available on our website or at our medical records office. Submit the completed form in person, by mail, or electronically.",
  },
  {
    question: "How to update personal information in the records",
    answer:
      "To update your personal information, log into your patient portal or contact our registration department. Provide the updated information and any required documentation.",
  },
  {
    question: "Patient privacy policy",
    answer:
      "We are committed to protecting your privacy and comply with HIPAA regulations. Your medical information is kept confidential and is only shared with authorized personnel involved in your care. For more details, refer to our privacy policy on our website.",
  },
  {
    question: "Handling medical errors",
    answer:
      "If you find an error in your medical records, contact our medical records department to request a correction. We will review the information and make the necessary updates.",
  },
  {
    question: "Are medical records accessible online?",
    answer:
      "Yes, you can access your medical records online through our patient portal. Log in to view your records, lab results, and appointment history.",
  },
  {
    question: "Available services for patients with special needs",
    answer:
      "We provide various services for patients with special needs, including accessibility accommodations, translation services, and specialized support. Contact our patient services department to discuss your specific needs.",
  },
  {
    question: "How to get a second opinion",
    answer:
      "To get a second opinion, ask your primary care physician for a referral to another specialist or contact our referral office. We can help facilitate consultations with other medical professionals.",
  },
  {
    question: "Concern and complaint about care",
    answer:
      "If you have a concern or complaint about your care, please contact our patient relations department. We take patient feedback seriously and will work to resolve any issues you may have.",
  },
  {
    question: "Patient education and support groups",
    answer:
      "We offer patient education programs and support groups for various conditions and treatments. Check on our website or contact our patient services department for more information on available programs.",
  },
  {
    question: "How to request a wheelchair or other mobility aid",
    answer:
      "To request a wheelchair or other mobility aid, contact our patient services department or inform our staff upon arrival. We will provide the necessary assistance during your visit.",
  },
  {
    question: "Policy on hospital food and dietary needs",
    answer:
      "We provide meals that cater to various dietary needs and restrictions. If you have specific dietary requirements, please inform our staff or dietary department so we can accommodate your needs.",
  },
  {
    question: "Contacting a doctor or the care team",
    answer:
      "You can contact your doctor or care team through the patient portal, by phone, or by leaving a message with our front desk. We will ensure that your message is forwarded to the appropriate person.",
  },
  {
    question: "What to do if you have to bring your own medication",
    answer:
      "If you need to bring medication with you, inform our staff upon arrival. We will assist in managing your medications during your stay and ensure they are correctly administered.",
  },
  {
    question: "On-site pharmacy services",
    answer:
      "We have an on-site pharmacy that provides prescription medications and over-the-counter products. Contact our pharmacy department for more information on services and hours of operation.",
  },
  {
    question: "Hospital history and accreditation",
    answer:
      "Information about our hospital's history and accreditation is available on our website under the 'About Us' section. You can also contact our administration office for more detailed information.",
  },
];

const healthcareData: Healthcare = {
  Resources: healthcareResources,
  apiKey: "mutQYfLFGC0kVEVDruoKmS9yD4G_-k03Q-sjj8ajeCJQ-1fQsrdUdlnEIQ",
  agentId: "24",

  Patients: {
    title: "Patients Table",
    description:
      "This table contains information about patients, including their medical details and contact information.",
    data: [
      {
        Patient_ID: 1,
        First_Name: "$FIRSTNAME",
        Last_Name: "$LASTNAME",
        Date_Of_Birth: "1980-03-25",
        Gender: "Male",
        Email: "$FIRSTNAME.$LASTNAME@example.com",
        Phone_Number: "555-1234",
        Address: "123 Maple St, NY, USA",
        Insurance_ID: "INS123456",
        Primary_Doctor_ID: 101,
        Emergency_Contact: "Jane Doe (555-5678)",
      },
      {
        Patient_ID: 2,
        First_Name: "Mary",
        Last_Name: "Smith",
        Date_Of_Birth: "1975-07-10",
        Gender: "Female",
        Email: "mary.smith@example.com",
        Phone_Number: "555-5678",
        Address: "456 Oak St, London, UK",
        Insurance_ID: "INS654321",
        Primary_Doctor_ID: 102,
        Emergency_Contact: "Michael Smith (555-8765)",
      },
      {
        Patient_ID: 3,
        First_Name: "Alice",
        Last_Name: "Johnson",
        Date_Of_Birth: "1990-11-15",
        Gender: "Female",
        Email: "alice.johnson@example.com",
        Phone_Number: "555-8765",
        Address: "789 Elm St, Toronto, CA",
        Insurance_ID: "INS789456",
        Primary_Doctor_ID: 103,
        Emergency_Contact: "Bob Johnson (555-4321)",
      },
      {
        Patient_ID: 4,
        First_Name: "Robert",
        Last_Name: "Brown",
        Date_Of_Birth: "1965-05-30",
        Gender: "Male",
        Email: "robert.brown@example.com",
        Phone_Number: "555-4321",
        Address: "321 Pine St, Sydney, AUS",
        Insurance_ID: "INS321654",
        Primary_Doctor_ID: 104,
        Emergency_Contact: "Susan Brown (555-3456)",
      },
      {
        Patient_ID: 5,
        First_Name: "Linda",
        Last_Name: "Davis",
        Date_Of_Birth: "1988-12-05",
        Gender: "Female",
        Email: "linda.davis@example.com",
        Phone_Number: "555-3456",
        Address: "654 Birch St, Berlin, GER",
        Insurance_ID: "INS987654",
        Primary_Doctor_ID: 105,
        Emergency_Contact: "Tom Davis (555-6543)",
      },
    ],
  },
  Doctors: {
    title: "Doctors Table",
    description:
      "This table contains information about doctors, including their specialties and contact details.",
    data: [
      {
        Doctor_ID: 101,
        First_Name: "Emma",
        Last_Name: "Thompson",
        Specialty: "Cardiology",
        Email: "emma.thompson@hospital.com",
        Phone_Number: "555-1111",
        Office_Hours: "9 AM - 5 PM",
        Department: "Cardiology",
      },
      {
        Doctor_ID: 102,
        First_Name: "Liam",
        Last_Name: "Walker",
        Specialty: "Orthopedics",
        Email: "liam.walker@hospital.com",
        Phone_Number: "555-2222",
        Office_Hours: "10 AM - 6 PM",
        Department: "Orthopedics",
      },
      {
        Doctor_ID: 103,
        First_Name: "Olivia",
        Last_Name: "Martinez",
        Specialty: "Neurology",
        Email: "olivia.martinez@hospital.com",
        Phone_Number: "555-3333",
        Office_Hours: "8 AM - 4 PM",
        Department: "Neurology",
      },
      {
        Doctor_ID: 104,
        First_Name: "Noah",
        Last_Name: "Robinson",
        Specialty: "Pediatrics",
        Email: "noah.robinson@hospital.com",
        Phone_Number: "555-4444",
        Office_Hours: "9 AM - 5 PM",
        Department: "Pediatrics",
      },
      {
        Doctor_ID: 105,
        First_Name: "Sophia",
        Last_Name: "Lee",
        Specialty: "General Surgery",
        Email: "sophia.lee@hospital.com",
        Phone_Number: "555-5555",
        Office_Hours: "11 AM - 7 PM",
        Department: "Surgery",
      },
    ],
  },
  Appointments: {
    title: "Appointments Table",
    description:
      "This table tracks appointment details, including the status and scheduling information.",
    data: [
      {
        Appointment_ID: 1,
        Patient_ID: 1,
        Doctor_ID: 101,
        Appointment_Date: "2024-08-01",
        Time: "10:00 AM",
        Status: "Scheduled",
        Reason: "Routine Checkup",
        Notes: "",
      },
      {
        Appointment_ID: 2,
        Patient_ID: 2,
        Doctor_ID: 102,
        Appointment_Date: "2024-08-02",
        Time: "2:00 PM",
        Status: "Completed",
        Reason: "Fracture Follow-up",
        Notes: "",
      },
      {
        Appointment_ID: 3,
        Patient_ID: 3,
        Doctor_ID: 103,
        Appointment_Date: "2024-08-03",
        Time: "9:00 AM",
        Status: "Canceled",
        Reason: "Migraines",
        Notes: "Rescheduled for next week",
      },
      {
        Appointment_ID: 4,
        Patient_ID: 4,
        Doctor_ID: 104,
        Appointment_Date: "2024-08-04",
        Time: "1:00 PM",
        Status: "Scheduled",
        Reason: "Pediatric Evaluation",
        Notes: "",
      },
      {
        Appointment_ID: 5,
        Patient_ID: 5,
        Doctor_ID: 105,
        Appointment_Date: "2024-08-05",
        Time: "3:00 PM",
        Status: "No Show",
        Reason: "Surgery Consultation",
        Notes: "",
      },
    ],
  },
  MedicalRecords: {
    title: "Medical Records Table",
    description:
      "This table contains detailed medical information and history for each patient.",
    data: [
      {
        Record_ID: 1,
        Patient_ID: 1,
        Doctor_ID: 101,
        Date: "2024-07-20",
        Diagnosis: "Hypertension",
        Treatment: "Prescribed medication",
        Notes: "Follow-up in 3 months",
      },
      {
        Record_ID: 2,
        Patient_ID: 1,
        Doctor_ID: 102,
        Date: "2024-07-25",
        Diagnosis: "Broken Arm",
        Treatment: "Cast applied",
        Notes: "Recommended physical therapy",
      },
      {
        Record_ID: 3,
        Patient_ID: 2,
        Doctor_ID: 102,
        Date: "2024-07-25",
        Diagnosis: "Broken Leg",
        Treatment: "Cast applied",
        Notes: "Recommended physical therapy",
      },
      {
        Record_ID: 4,
        Patient_ID: 3,
        Doctor_ID: 103,
        Date: "2024-07-28",
        Diagnosis: "Migraine",
        Treatment: "MRI scan ordered",
        Notes: "Medication prescribed for relief",
      },
      {
        Record_ID: 5,
        Patient_ID: 4,
        Doctor_ID: 104,
        Date: "2024-07-30",
        Diagnosis: "Asthma",
        Treatment: "Adjusted medication dosage",
        Notes: "Monitor symptoms",
      },
      {
        Record_ID: 6,
        Patient_ID: 5,
        Doctor_ID: 105,
        Date: "2024-07-31",
        Diagnosis: "Appendicitis",
        Treatment: "Surgery performed",
        Notes: "Post-operative care instructions",
      },
    ],
  },
  Billing: {
    title: "Billing Table",
    description:
      "This table tracks billing information, including payment status and details.",
    data: [
      {
        Billing_ID: 1,
        Patient_ID: 1,
        Appointment_ID: 1,
        Amount: "$150",
        Payment_Status: "Paid",
        Payment_Date: "2024-08-01",
        Payment_Method: "Credit Card",
        Insurance_Claim: "Approved",
        Claim_Status: "Completed",
      },
      {
        Billing_ID: 2,
        Patient_ID: 2,
        Appointment_ID: 2,
        Amount: "$200",
        Payment_Status: "Paid",
        Payment_Date: "2024-08-02",
        Payment_Method: "PayPal",
        Insurance_Claim: "Approved",
        Claim_Status: "Completed",
      },
      {
        Billing_ID: 3,
        Patient_ID: 3,
        Appointment_ID: 3,
        Amount: "$300",
        Payment_Status: "Unpaid",
        Payment_Date: "Payment Due",
        Payment_Method: "N/A",
        Insurance_Claim: "Pending",
        Claim_Status: "Pending",
      },
      {
        Billing_ID: 4,
        Patient_ID: 4,
        Appointment_ID: 4,
        Amount: "$100",
        Payment_Status: "Paid",
        Payment_Date: "2024-08-04",
        Payment_Method: "Bank Transfer",
        Insurance_Claim: "Approved",
        Claim_Status: "Completed",
      },
      {
        Billing_ID: 5,
        Patient_ID: 5,
        Appointment_ID: 5,
        Amount: "$500",
        Payment_Status: "Paid",
        Payment_Date: "2024-08-05",
        Payment_Method: "Credit Card",
        Insurance_Claim: "Approved",
        Claim_Status: "Completed",
      },
    ],
  },
};

/* ***************** */
/* EDUCATION DATA */

const educationResources: Resource[] = [
  {
    question: "How to apply for admission",
    answer:
      "To apply for admission, visit our admissions page, create an account, and complete the online application form. Submit the required documents, such as transcripts, test scores, and recommendation letters.",
  },
  {
    question: "Admission requirements",
    answer:
      "Admission requirements vary by program. Generally, you need a high school diploma or equivalent, standardized test scores (e.g., SAT or ACT), and completed application materials. Specific programs may have additional requirements.",
  },
  {
    question: "Application deadline",
    answer:
      "Application deadlines vary by program and intake period. Check our admissions page for specific deadlines for undergraduate, graduate, and international applications.",
  },
  {
    question: "Application for financial aid or scholarships",
    answer:
      "We offer various financial aid options, including scholarships, grants, and loans. To apply, complete the Free Application for Federal Student Aid (FAFSA) and our institutional financial aid application.",
  },
  {
    question: "How to check application status",
    answer:
      "Log into your application portal to check your application status. You will receive notifications via email about any updates or additional requirements.",
  },
  {
    question: "Offered undergraduate programs",
    answer:
      "We offer a wide range of undergraduate programs across various disciplines, including arts and humanities, business, engineering, sciences, and social sciences. Visit our academic programs page for a full list.",
  },
  {
    question: "Available graduate programs",
    answer:
      "Our graduate programs include master’s and doctoral degrees in fields such as business, education, engineering, health sciences, and social work. Check our graduate studies page for more details.",
  },
  {
    question: "Information about course schedules and registration",
    answer:
      "Course schedules and registration information are available on our registrar’s office page. You can also access this information through your student portal.",
  },
  {
    question: "Online courses",
    answer:
      "We offer a variety of online courses and degree programs. Visit our online learning page to explore available options and learn more about the online learning experience.",
  },
  {
    question: "Process for changing the major",
    answer:
      "To change your major, schedule an appointment with your academic advisor to discuss your options. Complete the necessary forms and obtain the required approvals from your current and new departments.",
  },
  {
    question: "Available housing options",
    answer:
      "We offer on-campus housing in residence halls, apartments, and themed living communities. Visit our housing and residence life page for detailed information and application procedures.",
  },
  {
    question: "Dining options on campus",
    answer:
      "Our campus features multiple dining options, including dining halls, cafes, and food courts. Meal plans are available to accommodate different dietary needs and preferences.",
  },
  {
    question: "Student organizations",
    answer:
      "We have a diverse range of student organizations, including academic clubs, cultural groups, sports teams, and volunteer organizations. Visit our student life page to explore and join student organizations.",
  },
  {
    question: "About campus events",
    answer:
      "Stay informed about campus events through our university calendar, student portal, and social media channels. Participate in events such as orientation, homecoming, and cultural festivals.",
  },
  {
    question: "Health and wellness services",
    answer:
      "Our health and wellness center provides medical services, counseling, and wellness programs. Access resources for mental health support, fitness, and preventive care through our health services page.",
  },
  {
    question: "How to pay for tuition and fees",
    answer:
      "Tuition and fees can be paid online through your student portal. We accept various payment methods, including credit cards, electronic checks, and payment plans.",
  },
  {
    question: "Tuition and fee rates",
    answer:
      "Tuition and fee rates vary by program and residency status. Visit our bursar’s office page for detailed information on current rates and additional costs.",
  },
  {
    question: "How to apply for financial aid",
    answer:
      "To apply for financial aid, complete the FAFSA and our institutional financial aid application. Submit all required documents by the specified deadlines to be considered for aid.",
  },
  {
    question: "Available scholarships",
    answer:
      "We offer merit-based, need-based, and program-specific scholarships. Visit our scholarships page to learn about eligibility criteria and application procedures.",
  },
  {
    question: "Information about financial aid award",
    answer:
      "Financial aid awards are available through your student portal. Log in to view your award letter, accept or decline offers, and complete any additional requirements.",
  },
  {
    question: "How to apply as an international student",
    answer:
      "International students can apply through our online application portal. Submit the required documents, including transcripts, test scores, proof of English proficiency, and financial statements.",
  },
  {
    question: "Accepted English proficiency tests",
    answer:
      "We accept TOEFL, IELTS, and other recognized English proficiency tests. Check our international admissions page for specific score requirements.",
  },
  {
    question: "Provided visa support",
    answer:
      "Our international student office assists with visa applications, provides pre-arrival information, and offers support services upon arrival. Visit our international student page for more details.",
  },
  {
    question: "Special orientation programs for international students",
    answer:
      "We offer orientation programs designed specifically for international students. These programs help you acclimate to campus life, understand academic expectations, and connect with other international students.",
  },
  {
    question: "Housing for international students",
    answer:
      "International students can apply for on-campus housing or seek off-campus options. Our international student office provides resources and assistance in finding suitable accommodation.",
  },
];

const educationData: Education = {
  Resources: educationResources,
  apiKey: "HcW3cFW58Z8YAxkC_11MeO1uX4XEt7lOoDcLIO87EYCP3G1eQh-vsEWeog",
  agentId: "26",

  Students: {
    title: "Students Table",
    description:
      "This table contains information about students, including their enrollment details and contact information.",
    data: [
      {
        Student_ID: 1,
        First_Name: "$FIRSTNAME",
        Last_Name: "$LASTNAME",
        Date_Of_Birth: "2000-09-15",
        Gender: "Female",
        Email: "$FIRSTNAME.$LASTNAME@university.com",
        Phone_Number: "555-1234",
        Address: "123 Maple St, NY, USA",
        Major: "Computer Science",
        Year: "Junior",
        GPA: 3.6,
        Advisor_ID: 101,
        Enrollment_Date: "2019-08-20",
        Graduation_Date: "2024-05-15",
      },
      {
        Student_ID: 2,
        First_Name: "Bob",
        Last_Name: "Smith",
        Date_Of_Birth: "1999-11-22",
        Gender: "Male",
        Email: "bob.smith@university.com",
        Phone_Number: "555-5678",
        Address: "456 Oak St, London, UK",
        Major: "Business Administration",
        Year: "Senior",
        GPA: 3.8,
        Advisor_ID: 102,
        Enrollment_Date: "2018-08-20",
        Graduation_Date: "2024-05-15",
      },
      {
        Student_ID: 3,
        First_Name: "Charlie",
        Last_Name: "Brown",
        Date_Of_Birth: "2001-05-30",
        Gender: "Male",
        Email: "charlie.brown@university.com",
        Phone_Number: "555-8765",
        Address: "789 Elm St, Toronto, CA",
        Major: "Mechanical Engineering",
        Year: "Sophomore",
        GPA: 3.4,
        Advisor_ID: 103,
        Enrollment_Date: "2020-08-20",
        Graduation_Date: "2024-05-15",
      },
      {
        Student_ID: 4,
        First_Name: "Diana",
        Last_Name: "Davis",
        Date_Of_Birth: "1998-07-12",
        Gender: "Female",
        Email: "diana.davis@university.com",
        Phone_Number: "555-4321",
        Address: "321 Pine St, Sydney, AUS",
        Major: "Psychology",
        Year: "Senior",
        GPA: 3.9,
        Advisor_ID: 104,
        Enrollment_Date: "2018-08-20",
        Graduation_Date: "2024-05-15",
      },
      {
        Student_ID: 5,
        First_Name: "Ethan",
        Last_Name: "Wilson",
        Date_Of_Birth: "2000-12-01",
        Gender: "Male",
        Email: "ethan.wilson@university.com",
        Phone_Number: "555-3456",
        Address: "654 Birch St, Berlin, GER",
        Major: "Physics",
        Year: "Junior",
        GPA: 3.5,
        Advisor_ID: 105,
        Enrollment_Date: "2019-08-20",
        Graduation_Date: "2024-05-15",
      },
    ],
  },
  Faculty: {
    title: "Faculty Table",
    description:
      "This table tracks information about faculty members, including their departments and contact details.",
    data: [
      {
        Faculty_ID: 101,
        First_Name: "Sarah",
        Last_Name: "Lee",
        Department: "Computer Science",
        Email: "sarah.lee@university.com",
        Phone_Number: "555-1111",
        Office_Hours: "10 AM - 4 PM",
        Position: "Professor",
      },
      {
        Faculty_ID: 102,
        First_Name: "James",
        Last_Name: "Miller",
        Department: "Business Administration",
        Email: "james.miller@university.com",
        Phone_Number: "555-2222",
        Office_Hours: "9 AM - 3 PM",
        Position: "Associate Professor",
      },
      {
        Faculty_ID: 103,
        First_Name: "Linda",
        Last_Name: "Clark",
        Department: "Mechanical Engineering",
        Email: "linda.clark@university.com",
        Phone_Number: "555-3333",
        Office_Hours: "11 AM - 5 PM",
        Position: "Assistant Professor",
      },
      {
        Faculty_ID: 104,
        First_Name: "Michael",
        Last_Name: "Walker",
        Department: "Psychology",
        Email: "michael.walker@university.com",
        Phone_Number: "555-4444",
        Office_Hours: "12 PM - 6 PM",
        Position: "Professor",
      },
      {
        Faculty_ID: 105,
        First_Name: "Emily",
        Last_Name: "Harris",
        Department: "Physics",
        Email: "emily.harris@university.com",
        Phone_Number: "555-5555",
        Office_Hours: "9 AM - 2 PM",
        Position: "Lecturer",
      },
    ],
  },
  Courses: {
    title: "Courses Table",
    description:
      "This table contains information about courses offered by the university.",
    data: [
      {
        Course_ID: 101,
        Course_Name: "Data Structures",
        Department: "Computer Science",
        Credits: 4,
        Semester: "Fall 2024",
        Instructor_ID: 101,
        Capacity: 30,
        Enrolled: 28,
        Schedule: "Mon, Wed 2-3:30 PM",
      },
      {
        Course_ID: 102,
        Course_Name: "Marketing Management",
        Department: "Business Administration",
        Credits: 3,
        Semester: "Spring 2024",
        Instructor_ID: 102,
        Capacity: 40,
        Enrolled: 35,
        Schedule: "Tue, Thu 10-11:30 AM",
      },
      {
        Course_ID: 103,
        Course_Name: "Thermodynamics",
        Department: "Mechanical Engineering",
        Credits: 4,
        Semester: "Fall 2024",
        Instructor_ID: 103,
        Capacity: 25,
        Enrolled: 20,
        Schedule: "Mon, Wed 1-2:30 PM",
      },
      {
        Course_ID: 104,
        Course_Name: "Cognitive Psychology",
        Department: "Psychology",
        Credits: 3,
        Semester: "Spring 2024",
        Instructor_ID: 104,
        Capacity: 35,
        Enrolled: 30,
        Schedule: "Tue, Thu 2-3:30 PM",
      },
      {
        Course_ID: 105,
        Course_Name: "Quantum Mechanics",
        Department: "Physics",
        Credits: 4,
        Semester: "Fall 2024",
        Instructor_ID: 105,
        Capacity: 30,
        Enrolled: 22,
        Schedule: "Mon, Wed 3-4:30 PM",
      },
    ],
  },
  Enrollments: {
    title: "Enrollments Table",
    description:
      "This table tracks which students are enrolled in which courses.",
    data: [
      {
        Enrollment_ID: 1,
        Student_ID: 1,
        Course_ID: 101,
        Enrollment_Date: "2024-08-01",
        Grade: "A",
      },
      {
        Enrollment_ID: 2,
        Student_ID: 1,
        Course_ID: 102,
        Enrollment_Date: "2024-08-01",
        Grade: "B",
      },
      {
        Enrollment_ID: 3,
        Student_ID: 1,
        Course_ID: 103,
        Enrollment_Date: "2024-08-01",
        Grade: "A-",
      },
      {
        Enrollment_ID: 4,
        Student_ID: 1,
        Course_ID: 104,
        Enrollment_Date: "2024-08-01",
        Grade: "A",
      },
      {
        Enrollment_ID: 5,
        Student_ID: 2,
        Course_ID: 103,
        Enrollment_Date: "2024-08-01",
        Grade: "B",
      },
      {
        Enrollment_ID: 6,
        Student_ID: 3,
        Course_ID: 101,
        Enrollment_Date: "2024-08-01",
        Grade: "A-",
      },
      {
        Enrollment_ID: 7,
        Student_ID: 4,
        Course_ID: 102,
        Enrollment_Date: "2024-08-01",
        Grade: "C",
      },
      {
        Enrollment_ID: 8,
        Student_ID: 5,
        Course_ID: 103,
        Enrollment_Date: "2024-08-01",
        Grade: "B+",
      },
    ],
  },
  Exams: {
    title: "Exams Table",
    description:
      "This table contains information about exams and their schedules.",
    data: [
      {
        Exam_ID: 1,
        Course_ID: 101,
        Exam_Date: "2024-12-15",
        Exam_Time: "9:00 AM",
        Location: "Room 301",
        Type: "Midterm",
      },
      {
        Exam_ID: 2,
        Course_ID: 102,
        Exam_Date: "2024-12-16",
        Exam_Time: "11:00 AM",
        Location: "Room 302",
        Type: "Final",
      },
      {
        Exam_ID: 3,
        Course_ID: 103,
        Exam_Date: "2024-12-17",
        Exam_Time: "1:00 PM",
        Location: "Room 303",
        Type: "Midterm",
      },
      {
        Exam_ID: 4,
        Course_ID: 104,
        Exam_Date: "2024-12-18",
        Exam_Time: "3:00 PM",
        Location: "Room 304",
        Type: "Final",
      },
      {
        Exam_ID: 5,
        Course_ID: 105,
        Exam_Date: "2024-12-19",
        Exam_Time: "10:00 AM",
        Location: "Room 305",
        Type: "Midterm",
      },
    ],
  },
  SupportTickets: {
    title: "Support Tickets Table",
    description: "This table logs support requests from students and staff.",
    data: [
      {
        Ticket_ID: 1,
        Student_ID: 1,
        Issue_Type: "Course Enrollment",
        Description: "I can't enroll in a course I need.",
        Date_Submitted: "2024-08-01",
        Resolution_Status: "Resolved",
        Resolution_Description: "Enrollment issue fixed, you are now enrolled.",
      },
      {
        Ticket_ID: 2,
        Student_ID: 1,
        Issue_Type: "Grade Discrepancy",
        Description: "I believe there is a mistake in my grade.",
        Date_Submitted: "2024-08-02",
        Resolution_Status: "Resolved",
        Resolution_Description: "Grade corrected in the system.",
      },
      {
        Ticket_ID: 3,
        Student_ID: 1,
        Issue_Type: "Schedule Conflict",
        Description: "My exam schedule conflicts with another exam.",
        Date_Submitted: "2024-08-03",
        Resolution_Status: "Pending",
        Resolution_Description:
          "Conflict being reviewed by the administration.",
      },
    ],
  },
};

/* ***************** */
/* HOSPITALITY DATA */

const hospitalityResources: Resource[] = [
  {
    question: "How to make a reservation",
    answer:
      "To make a reservation, search for your desired destination and dates, select a hotel, choose your room type, and follow the prompts to complete your booking. You will receive a confirmation email with your booking details once the reservation is completed.",
  },
  {
    question: "Credit card requirements for reservation",
    answer:
      "Most hotels require a credit card to guarantee a reservation. However, some hotels may offer alternative payment options or allow you to pay upon arrival. Check the payment policies of the specific hotel for more details.",
  },
  {
    question: "Modifying or canceling reservation",
    answer:
      "To modify or cancel your reservation, log into your account, go to the 'My Bookings' section, select the booking you want to change, and follow the prompts to modify or cancel. Be sure to check the hotel's cancellation policy to avoid any fees.",
  },
  {
    question: "Check-in and check-out times",
    answer:
      "Standard check-in times are typically between 2:00 PM and 4:00 PM, and check-out times are usually between 10:00 AM and 12:00 PM. Early check-in and late check-out may be available upon request and are subject to availability.",
  },
  {
    question: "Early check-in/check-out request",
    answer:
      "You can request an early check-in or late check-out. These requests are subject to availability and may incur additional charges. Contact the hotel directly to make arrangements.",
  },
  {
    question: "Accepted payment methods",
    answer:
      "Our Hotel accepts major credit cards, such as Visa, MasterCard, and American Express. Some hotels may also accept PayPal, bank transfers, and cash payments. Check the hotel's payment policies for specific details.",
  },
  {
    question: "When will the credit card be charged?",
    answer:
      "A credit card may be charged at the time of booking or upon arrival, depending on the hotel's policy. Some bookings may require a deposit, while others may offer a 'pay at the hotel' option. Review the payment terms during the booking process.",
  },
  {
    question: "Additional fees and taxes",
    answer:
      "Additional fees and taxes may apply, such as resort fees, service charges, and local taxes. These fees are typically disclosed during the booking process and will be included in the total price.",
  },
  {
    question: "Promo code or discount during booking",
    answer:
      "You can apply a promo code or discount during the booking process. Enter the code in the designated field before completing your reservation to receive the discount. Make sure to check the terms and conditions of the promo code for any restrictions.",
  },
  {
    question: "Receiving a receipt",
    answer:
      "Receipts are usually provided upon check-out. You can also request a receipt to be sent via email or printed from your account under the 'My Bookings' section.",
  },
  {
    question:
      "How to request special accommodations (e.g., accessible rooms, dietary needs)",
    answer:
      "You can request special accommodations during the booking process or by contacting the hotel directly. Be sure to specify your needs, such as accessible rooms, dietary requirements, or any other special requests.",
  },
  {
    question: "Available amenities at the hotel",
    answer:
      "Amenities may include free Wi-Fi, parking, breakfast, fitness center, swimming pool, and business center.",
  },
  {
    question: "Pet policy",
    answer:
      "Pet policies vary by hotel. Some hotels are pet-friendly and allow pets with certain restrictions, while others do not allow pets at all. Check the hotel's pet policy before booking to ensure your pet is welcome.",
  },
  {
    question: "Airport transportation",
    answer:
      "You can arrange for airport transportation during the booking process or by contacting the hotel directly with your flight details. Fees may apply for this service.",
  },
  {
    question: "Loyalty programs",
    answer:
      "Yes, we offer loyalty programs that allow you to earn points for each stay. Points can be redeemed for free nights, upgrades, and other rewards.",
  },
  {
    question: "How to earn and redeem loyalty points",
    answer:
      "You earn points by staying at participating hotels and booking directly through the website or app. To redeem points, log into your loyalty account, search for available rewards, and follow the prompts to use your points for a free night, upgrade, or other benefits.",
  },
  {
    question: "Checking loyalty points balance",
    answer:
      "You can check your points balance by logging into your loyalty account on the hotel's website or app. Your balance and transaction history will be displayed in your account dashboard.",
  },
  {
    question: "Loyalty points expiration",
    answer:
      "Loyalty points may expire after a certain period of inactivity based on the offer, most common expiration date being 3 months.",
  },
  {
    question: "Cancellation policy",
    answer:
      "Cancellation policies vary by the booking type. Some bookings may be canceled free of charge within a certain period, while others may be non-refundable. Check the cancellation policy during the booking process and in your confirmation email.",
  },
  {
    question: "How to contact customer support",
    answer:
      "You can contact us via phone, email, or live chat. Contact details are available on the hotel's website under the 'Contact Us' section.",
  },
  {
    question: "Travel insurance",
    answer:
      "Our Hotel offers travel insurance as an optional add-on during the booking process. This insurance can cover cancellations, interruptions, and other travel-related issues. Check the terms and conditions for coverage details.",
  },
  {
    question: "Leaving a review",
    answer:
      "After your stay, you will receive an email invitation to leave a review. You can also log into your account, go to the 'My Bookings' section, and find the option to leave a review for your recent stays.",
  },
  {
    question: "Forgotten items policy",
    answer:
      "Contact the hotel directly as soon as possible. Provide details about the lost item and your stay. The hotel will check their lost and found department and assist you in recovering your belongings.",
  },
];

const hospitalityData: Hospitality = {
  Resources: hospitalityResources,
  agentId: "21",

  apiKey: "35q1g6cduM4axABGRnv_dBohwIzxjjBFwjOYX_E1QfG_MF5KhKpKybBY2g",

  Rooms: {
    title: "Rooms Table",
    description:
      "This table contains detailed information about each room in the hotel.",
    data: [
      {
        Room_ID: 1,
        Room_Number: "302",
        Room_Type: "Double",
        Smoking_Allowed: false,
        Price_Per_Night: "$150",
        Bed_Type: "Queen",
        Occupancy: 2,
        Room_Status: "Available",
        Floor: 3,
        View: "Garden View",
        Room_Amenities: "Wi-Fi, TV, Mini-Fridge, Safe, Air Conditioning",
      },
      {
        Room_ID: 2,
        Room_Number: "101",
        Room_Type: "Suite",
        Smoking_Allowed: true,
        Price_Per_Night: "$300",
        Bed_Type: "King",
        Occupancy: 4,
        Room_Status: "Occupied",
        Floor: 1,
        View: "Ocean View",
        Room_Amenities: "Wi-Fi, TV, Jacuzzi, Mini-Bar, Kitchenette",
      },
      {
        Room_ID: 3,
        Room_Number: "204",
        Room_Type: "Single",
        Smoking_Allowed: false,
        Price_Per_Night: "$100",
        Bed_Type: "Twin",
        Occupancy: 1,
        Room_Status: "Available",
        Floor: 2,
        View: "City View",
        Room_Amenities: "Wi-Fi, TV, Safe, Air Conditioning",
      },
      {
        Room_ID: 4,
        Room_Number: "305",
        Room_Type: "Family",
        Smoking_Allowed: true,
        Price_Per_Night: "$200",
        Bed_Type: "Double",
        Occupancy: 4,
        Room_Status: "Available",
        Floor: 3,
        View: "Pool View",
        Room_Amenities: "Wi-Fi, TV, Mini-Fridge, Microwave, Safe",
      },
      {
        Room_ID: 5,
        Room_Number: "409",
        Room_Type: "Deluxe",
        Smoking_Allowed: false,
        Price_Per_Night: "$250",
        Bed_Type: "King",
        Occupancy: 2,
        Room_Status: "Under Maintenance",
        Floor: 4,
        View: "Mountain View",
        Room_Amenities: "Wi-Fi, TV, Mini-Bar, Safe, Air Conditioning",
      },
    ],
  },
  Users: {
    title: "Users Table",
    description:
      "This table tracks information about hotel guests, including their contact details and loyalty status.",
    data: [
      {
        User_ID: 1,
        Guest_Name: "$FIRSTNAME $LASTNAME",
        Guest_Email: "$FIRSTNAME@example.com",
        Phone_Number: "555-1234",
        Loyalty_Status: "Gold",
        Address: "123 Maple St, NY, USA",
        Date_Of_Birth: "1985-05-15",
        Nationality: "American",
      },
      {
        User_ID: 2,
        Guest_Name: "Jane Smith",
        Guest_Email: "jane@example.com",
        Phone_Number: "555-5678",
        Loyalty_Status: "Silver",
        Address: "456 Oak Ave, CA, USA",
        Date_Of_Birth: "1990-09-10",
        Nationality: "American",
      },
      {
        User_ID: 3,
        Guest_Name: "Ali Khan",
        Guest_Email: "ali.khan@example.com",
        Phone_Number: "555-8765",
        Loyalty_Status: "Platinum",
        Address: "789 Pine Rd, Dubai, UAE",
        Date_Of_Birth: "1978-11-22",
        Nationality: "Emirati",
      },
      {
        User_ID: 4,
        Guest_Name: "Maria Rossi",
        Guest_Email: "maria.rossi@example.com",
        Phone_Number: "555-4321",
        Loyalty_Status: "Gold",
        Address: "Via Roma 10, Rome, Italy",
        Date_Of_Birth: "1982-07-30",
        Nationality: "Italian",
      },
      {
        User_ID: 5,
        Guest_Name: "Ling Wei",
        Guest_Email: "ling.wei@example.com",
        Phone_Number: "555-3456",
        Loyalty_Status: "Silver",
        Address: "22 Beijing St, Beijing, China",
        Date_Of_Birth: "1995-12-12",
        Nationality: "Chinese",
      },
    ],
  },
  Amenities: {
    title: "Amenities Table",
    description: "This table lists all available amenities in the hotel.",
    data: [
      {
        Amenity_ID: 1,
        Amenity_Name: "Wi-Fi",
        Description: "High-speed wireless internet access",
      },
      {
        Amenity_ID: 2,
        Amenity_Name: "TV",
        Description: "Flat-screen television with satellite channels",
      },
      {
        Amenity_ID: 3,
        Amenity_Name: "Mini-Fridge",
        Description: "Small refrigerator in the room",
      },
      {
        Amenity_ID: 4,
        Amenity_Name: "Safe",
        Description: "In-room electronic safe",
      },
      {
        Amenity_ID: 5,
        Amenity_Name: "Air Conditioning",
        Description: "In-room climate control",
      },
      {
        Amenity_ID: 6,
        Amenity_Name: "Jacuzzi",
        Description: "Private in-room Jacuzzi",
      },
      {
        Amenity_ID: 7,
        Amenity_Name: "Kitchenette",
        Description: "Small kitchen area with basic appliances",
      },
      {
        Amenity_ID: 8,
        Amenity_Name: "Mini-Bar",
        Description: "Stocked minibar with drinks and snacks",
      },
      {
        Amenity_ID: 9,
        Amenity_Name: "Microwave",
        Description: "In-room microwave for guest use",
      },
      {
        Amenity_ID: 10,
        Amenity_Name: "Baby Crib",
        Description: "Portable crib for infants",
      },
    ],
  },
  Services: {
    title: "Services Table",
    description:
      "This table covers the different services offered by the hotel.",
    data: [
      {
        Service_ID: 1,
        Service_Name: "Room Service",
        Description: "In-room dining available 24/7",
        Price: "Varies",
      },
      {
        Service_ID: 2,
        Service_Name: "Laundry Service",
        Description: "Same-day laundry and dry cleaning service",
        Price: "$20/load",
      },
      {
        Service_ID: 3,
        Service_Name: "Airport Shuttle",
        Description: "Complimentary shuttle to and from the airport",
        Price: "Free",
      },
      {
        Service_ID: 4,
        Service_Name: "Spa Services",
        Description: "On-site spa offering massages, facials, and more",
        Price: "Varies",
      },
      {
        Service_ID: 5,
        Service_Name: "Fitness Center",
        Description: "Fully equipped gym open 24/7",
        Price: "Free",
      },
      {
        Service_ID: 6,
        Service_Name: "Concierge",
        Description: "Personalized assistance with reservations and tours",
        Price: "Free",
      },
      {
        Service_ID: 7,
        Service_Name: "Parking",
        Description: "Secure on-site parking",
        Price: "$10/day",
      },
      {
        Service_ID: 8,
        Service_Name: "Business Center",
        Description: "Access to computers, printers, and meeting rooms",
        Price: "Free",
      },
      {
        Service_ID: 9,
        Service_Name: "Childcare",
        Description: "Supervised activities for children",
        Price: "$15/hour",
      },
      {
        Service_ID: 10,
        Service_Name: "Valet Parking",
        Description: "Valet service for car parking",
        Price: "$20/day",
      },
    ],
  },
};

/* ***************** */
/* ONLINE CASINO DATA */

const SaaSResources: Resource[] = [
  {
    question: "What is TaskPro?",
    answer: "TaskPro is an all-in-one project management tool designed to help teams collaborate, organize tasks, and track progress. Whether you’re managing small projects or complex workflows, TaskPro helps streamline communication and ensure that every task is completed on time."
  },
  {
    question: "Who is TaskPro for?",
    answer: "TaskPro is designed for teams of all sizes, from freelancers to large enterprises. It's especially useful for project managers, marketing teams, software developers, agencies, and anyone who needs to organize work in a structured way."
  },
  {
    question: "How does TaskPro work?",
    answer: "TaskPro allows you to create projects, add tasks, assign them to team members, set deadlines, and monitor progress through a visual dashboard. Users can collaborate in real time, share files, comment on tasks, and track time. The platform also integrates with popular tools like Slack, Google Drive, and Zoom for seamless workflows."
  },
  {
    question: "What are TaskPro's key features?",
    answer: "TaskPro includes a variety of features: Task Assignment and Prioritization, Kanban Boards, Gantt Charts, Team Collaboration, Time Tracking, and Integration with third-party apps like Slack, Dropbox, and Asana."
  },
  {
    question: "Does TaskPro offer a free trial?",
    answer: "Yes, TaskPro offers a 14-day free trial with access to all features. No credit card is required to start the trial. After the trial, you can choose a pricing plan that best fits your needs."
  },
  {
    question: "What are the TaskPro pricing plans?",
    answer: "TaskPro offers three pricing tiers: Basic – $10/user/month, Pro – $20/user/month, and Enterprise – Custom pricing for large teams with additional features like priority support, SSO, and custom integrations."
  },
  {
    question: "What support does TaskPro offer?",
    answer: "We offer 24/7 customer support through live chat and email. Pro and Enterprise customers also have access to phone support. Additionally, we provide a comprehensive knowledge base with tutorials, FAQs, and troubleshooting guides."
  },
  {
    question: "How does onboarding and training work for new customers?",
    answer: "TaskPro offers personalized onboarding and training sessions for Pro and Enterprise customers. Basic plan users can access our self-service learning resources."
  },
  {
    question: "How can I request a feature?",
    answer: "You can request new features through our support chat or submit suggestions through the product feedback section in your dashboard."
  },
  {
    question: "How does TaskPro ensure security?",
    answer: "TaskPro uses industry-standard encryption (SSL) to protect your data. All sensitive information is encrypted in transit and at rest. We also offer two-factor authentication (2FA) and regular security audits to ensure the highest level of data protection."
  },
  {
    question: "Where is TaskPro data stored?",
    answer: "Your data is stored in highly secure, ISO-certified data centers in the United States. We also offer the option for customers to choose data storage in other regions based on their location."
  },
  {
    question: "Is TaskPro GDPR compliant?",
    answer: "Yes, TaskPro is fully compliant with the General Data Protection Regulation (GDPR). We take privacy seriously and offer tools to help users manage and delete their data if needed."
  },
  {
    question: "Can I customize TaskPro?",
    answer: "Yes, TaskPro allows you to customize your dashboards, create custom task fields, and set up automated workflows to match your team’s needs."
  },
  {
    question: "What integrations does TaskPro support?",
    answer: "TaskPro integrates with popular third-party tools such as Slack, Google Drive, Dropbox, Trello, Asana, Jira, Zoom, and many more. We’re always adding new integrations based on user feedback."
  },
  {
    question: "How can I upgrade or downgrade my plan?",
    answer: "You can upgrade or downgrade your plan at any time by visiting the billing section in your account settings. Changes will take effect immediately, and you’ll be billed or credited accordingly."
  },
  {
    question: "How can I cancel my TaskPro account?",
    answer: "You can cancel your subscription at any time. If you cancel, you’ll still have access to your account until the end of the billing cycle. We do not offer refunds for partial months."
  },
  {
    question: "How do I change my payment method?",
    answer: "You can update your payment information at any time by going to the billing section in your TaskPro account."
  },
  {
    question: "Is there a mobile app for TaskPro?",
    answer: "Yes, TaskPro is available as a mobile app on both iOS and Android devices, allowing you to manage tasks and projects on the go."
  },
  {
    question: "Does TaskPro work offline?",
    answer: "While most features require an internet connection, our mobile app offers limited offline functionality. You can view your tasks and projects offline, and any changes you make will sync once you reconnect to the internet."
  },
  {
    question: "Is TaskPro available in multiple languages?",
    answer: "Yes, TaskPro is available in several languages including English, Spanish, French, and German. We are continuously working to add more language support based on user demand."
  }
];


const SaaSData: SaaS = {
  Resources: SaaSResources,
  apiKey: "HcW3cFW58Z8YAxkC_11MeO1uX4XEt7lOoDcLIO87EYCP3G1eQh-vsEWbgf",
  agentId: "29",

  Users: {
    title: "Users Table",
    description: "This table contains user information.",
    data: [
      {
        user_id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@taskpro.com",
        role: "Admin",
        created_at: "2023-01-01 10:00:00",
        last_login: "2024-09-13 09:30:00",
        is_active: true,
      },
      {
        user_id: 2,
        first_name: "Jane",
        last_name: "Smith",
        email: "jane.smith@taskpro.com",
        role: "Member",
        created_at: "2023-02-15 12:00:00",
        last_login: "2024-09-12 15:45:00",
        is_active: true,
      },
      {
        user_id: 3,
        first_name: "Mike",
        last_name: "Johnson",
        email: "mike.johnson@taskpro.com",
        role: "Guest",
        created_at: "2023-03-22 08:30:00",
        last_login: "2024-09-11 14:22:00",
        is_active: true,
      },
      {
        user_id: 4,
        first_name: "Alice",
        last_name: "Brown",
        email: "alice.brown@taskpro.com",
        role: "Member",
        created_at: "2023-04-18 16:00:00",
        last_login: "2024-09-10 13:10:00",
        is_active: false,
      },
    ],
  },
  Projects: {
    title: "Projects Table",
    description: "This table stores data related to different projects.",
    data: [
      {
        project_id: 1,
        project_name: "Marketing Campaign",
        description: "A campaign to promote our new product",
        owner_id: 1,
        created_at: "2024-01-01 11:00:00",
        deadline: "2024-12-31",
        status: "Active",
      },
      {
        project_id: 2,
        project_name: "Website Redesign",
        description: "Complete overhaul of the website",
        owner_id: 2,
        created_at: "2024-06-15 09:00:00",
        deadline: "2024-11-01",
        status: "Active",
      },
      {
        project_id: 3,
        project_name: "Internal Audit",
        description: "Auditing internal processes",
        owner_id: 1,
        created_at: "2024-07-01 14:00:00",
        deadline: "2024-09-15",
        status: "Completed",
      },
      {
        project_id: 4,
        project_name: "New Feature Development",
        description: "Developing a new dashboard feature",
        owner_id: 2,
        created_at: "2024-08-01 13:00:00",
        deadline: "2024-10-10",
        status: "Active",
      },
    ],
  },
  Tasks: {
    title: "Tasks Table",
    description: "This table holds information about individual tasks within projects.",
    data: [
      {
        task_id: 1,
        task_name: "Design social media ads",
        description: "Create and design ads for the new campaign",
        project_id: 1,
        assigned_to: 2,
        status: "In Progress",
        priority: "High",
        created_at: "2024-01-02 09:00:00",
        due_date: "2024-09-20",
        completed_at: null,
      },
      {
        task_id: 2,
        task_name: "Audit finance records",
        description: "Review and audit all financial documents",
        project_id: 3,
        assigned_to: 1,
        status: "Done",
        priority: "Medium",
        created_at: "2024-07-02 10:00:00",
        due_date: "2024-08-15",
        completed_at: "2024-08-10 11:45:00",
      },
      {
        task_id: 3,
        task_name: "Build front-end feature",
        description: "Develop front-end UI for the new dashboard",
        project_id: 4,
        assigned_to: 3,
        status: "To Do",
        priority: "High",
        created_at: "2024-08-02 14:00:00",
        due_date: "2024-09-25",
        completed_at: null,
      },
      {
        task_id: 4,
        task_name: "Update homepage",
        description: "Redesign the homepage layout",
        project_id: 2,
        assigned_to: 2,
        status: "In Progress",
        priority: "Medium",
        created_at: "2024-06-16 15:00:00",
        due_date: "2024-09-30",
        completed_at: null,
      },
      {
        task_id: 5,
        task_name: "Set up email campaign",
        description: "Create automated email sequences for clients",
        project_id: 1,
        assigned_to: 4,
        status: "To Do",
        priority: "Low",
        created_at: "2024-01-10 11:30:00",
        due_date: "2024-10-01",
        completed_at: null,
      },
    ],
  },
  Comments: {
    title: "Comments Table",
    description: "This table tracks comments made by users on tasks.",
    data: [
      {
        comment_id: 1,
        task_id: 1,
        user_id: 2,
        comment_text: "Ad designs almost ready, will upload soon.",
        created_at: "2024-09-10 10:45:00",
      },
      {
        comment_id: 2,
        task_id: 3,
        user_id: 3,
        comment_text: "Starting the front-end development today.",
        created_at: "2024-09-11 12:15:00",
      },
      {
        comment_id: 3,
        task_id: 4,
        user_id: 2,
        comment_text: "Homepage redesign is 50% complete.",
        created_at: "2024-09-08 14:00:00",
      },
      {
        comment_id: 4,
        task_id: 2,
        user_id: 1,
        comment_text: "Audit is complete. Everything looks good.",
        created_at: "2024-08-10 12:00:00",
      },
    ],
  },
  TimeTracking: {
    title: "Time Tracking Table",
    description: "This table tracks time spent on tasks by users.",
    data: [
      {
        time_entry_id: 1,
        task_id: 1,
        user_id: 2,
        start_time: "2024-09-11 08:00:00",
        end_time: "2024-09-11 10:00:00",
        total_hours: 2,
      },
      {
        time_entry_id: 2,
        task_id: 3,
        user_id: 3,
        start_time: "2024-09-11 13:00:00",
        end_time: "2024-09-11 17:00:00",
        total_hours: 4,
      },
      {
        time_entry_id: 3,
        task_id: 2,
        user_id: 1,
        start_time: "2024-08-10 09:00:00",
        end_time: "2024-08-10 11:30:00",
        total_hours: 2.5,
      },
      {
        time_entry_id: 4,
        task_id: 4,
        user_id: 2,
        start_time: "2024-09-09 09:30:00",
        end_time: "2024-09-09 12:00:00",
        total_hours: 2.5,
      },
    ],
  },
  Integrations: {
    title: "Integrations Table",
    description: "This table stores information on external integrations used by TaskPro users.",
    data: [
      {
        integration_id: 1,
        user_id: 2,
        integration_name: "Slack",
        status: "Active",
        added_on: "2024-01-05 11:00:00",
      },
      {
        integration_id: 2,
        user_id: 3,
        integration_name: "Google Drive",
        status: "Active",
        added_on: "2024-03-10 09:30:00",
      },
      {
        integration_id: 3,
        user_id: 1,
        integration_name: "Dropbox",
        status: "Inactive",
        added_on: "2024-05-22 10:45:00",
      },
      {
        integration_id: 4,
        user_id: 4,
        integration_name: "Zoom",
        status: "Active",
        added_on: "2024-06-01 08:15:00",
      },
    ],
  },
  Notifications: {
    title: "Notifications Table",
    description: "This table tracks notifications sent to users for task updates and project milestones.",
    data: [
      {
        notification_id: 1,
        user_id: 2,
        message: "Task 'Design social media ads' is due soon.",
        status: "Unread",
        created_at: "2024-09-12 14:00:00",
      },
      {
        notification_id: 2,
        user_id: 3,
        message: "New task 'Build front-end feature' assigned to you.",
        status: "Read",
        created_at: "2024-09-10 12:00:00",
      },
      {
        notification_id: 3,
        user_id: 4,
        message: "Project 'Marketing Campaign' milestone reached.",
        status: "Unread",
        created_at: "2024-09-09 09:30:00",
      },
      {
        notification_id: 4,
        user_id: 1,
        message: "Task 'Audit finance records' marked as complete.",
        status: "Read",
        created_at: "2024-08-10 11:50:00",
      },
    ],
  },
};

export const data: Data = {
  "E-commerce": eCommerceData,
  Marketplace: marketplaceData,
  Healthcare: healthcareData,
  Education: educationData,
  Hospitality: hospitalityData,
  SaaS: SaaSData,
};
