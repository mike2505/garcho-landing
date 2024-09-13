export type DemoPage = {
  forward: () => void;
  backward: () => void;
};

export type Industry =
  | "E-commerce"
  | "Marketplace"
  | "Hospitality"
  | "SaaS"
  | "Healthcare"
  | "Education";

export type IndustryType =
  | ECommerce
  | Marketplace
  | Healthcare
  | Education
  | Hospitality
  | SaaS;

export type DemoInformation = {
  industry: Industry;
  firstName: string;
  lastName: string;
};

export type MessageType = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

export type Resource = {
  question: string;
  answer: string;
};

export type Data = {
  "E-commerce": ECommerce;
  Marketplace: Marketplace;
  Healthcare: Healthcare;
  Education: Education;
  Hospitality: Hospitality;
  "SaaS": SaaS;
};

/* ***************** */
/* E-COMMERCE TYPES */

type ECommerceProductType = {
  Product_ID: number;
  Product_Name: string;
  Category: string;
  Brand: string;
  Price: string;
  Stock: number;
  Rating: number;
  Description: string;
  Is_Discounted: boolean;
  Discount_Percentage: string;
};

type ECommerceCustomerType = {
  Customer_ID: number;
  Username: string;
  Email: string;
  Phone_Number: string;
  Loyalty_Status: string;
  Country: string;
  Date_Of_Birth: string;
  VIP_Status: boolean;
};

type ECommerceOrderType = {
  Order_ID: number;
  Customer_ID: number;
  Order_Date: string;
  Total_Amount: string;
  Order_Status: string;
  Payment_Method: string;
  Shipping_Address: string;
  Shipping_Status: string;
  Tracking_Number: string | null;
  Delivery_Estimate: string | null;
};

type ECommercePaymentType = {
  Payment_ID: number;
  Order_ID: number;
  Customer_ID: number;
  Payment_Date: string;
  Amount: string;
  Payment_Method: string;
  Payment_Status: string;
  Transaction_ID: string;
  Failure_Reason: string | null;
};

type ECommerceSupportTicketType = {
  Ticket_ID: number;
  Customer_ID: number;
  Issue_Type: string;
  Description: string;
  Date_Submitted: string;
  Resolution_Status: string;
  Resolution_Description: string;
};

type ECommerceUpcomingEventPromotionType = {
  Event_ID: number;
  Event_Name: string;
  Event_Type: string;
  Start_Date: string;
  End_Date: string;
  Discount_Percentage: string;
  Applicable_Categories: string;
  Promo_Code: string;
  Description: string;
};

export type ECommerce = {
  Resources: Resource[];
  apiKey: string;
  agentId: string;

  Products: {
    title: string;
    description: string;
    data: ECommerceProductType[];
  };
  Customers: {
    title: string;
    description: string;
    data: ECommerceCustomerType[];
  };
  Orders: {
    title: string;
    description: string;
    data: ECommerceOrderType[];
  };
  Payments: {
    title: string;
    description: string;
    data: ECommercePaymentType[];
  };
  SupportTickets: {
    title: string;
    description: string;
    data: ECommerceSupportTicketType[];
  };
  UpcomingEventsPromotions: {
    title: string;
    description: string;
    data: ECommerceUpcomingEventPromotionType[];
  };
};

/* ************* */
/* MARKETPLACE TYPES */

type MarketplaceSellerType = {
  Seller_ID: number;
  Seller_Name: string;
  Contact_Email: string;
  Phone_Number: string;
  Store_Name: string;
  Rating: number;
  Total_Sales: number;
  Country: string;
  Join_Date: string;
};

type MarketplaceProductType = {
  Product_ID: number;
  Seller_ID: number;
  Product_Name: string;
  Category: string;
  Price: string;
  Stock: number;
  Rating: number;
  Description: string;
  Is_Discounted: boolean;
  Discount_Percentage: string;
  Returnable: boolean;
};

type MarketplaceCustomerType = {
  Customer_ID: number;
  Username: string;
  Email: string;
  Phone_Number: string;
  Loyalty_Status: string;
  Country: string;
  Date_Of_Birth: string;
  VIP_Status: boolean;
};

type MarketplaceOrderType = {
  Order_ID: number;
  Customer_ID: number;
  Seller_ID: number;
  Order_Date: string;
  Total_Amount: string;
  Order_Status: string;
  Payment_Method: string;
  Shipping_Address: string;
  Shipping_Status: string;
  Tracking_Number: string | null;
  Delivery_Estimate: string | null;
};

type MarketplacePaymentType = {
  Payment_ID: number;
  Order_ID: number;
  Customer_ID: number;
  Payment_Date: string;
  Amount: string;
  Payment_Method: string;
  Payment_Status: string;
  Transaction_Reference: string;
  Failure_Reason: string | null;
};

export type Marketplace = {
  Resources: Resource[];
  apiKey: string;
  agentId: string;

  Sellers: {
    title: string;
    description: string;
    data: MarketplaceSellerType[];
  };
  Products: {
    title: string;
    description: string;
    data: MarketplaceProductType[];
  };
  Customers: {
    title: string;
    description: string;
    data: MarketplaceCustomerType[];
  };
  Orders: {
    title: string;
    description: string;
    data: MarketplaceOrderType[];
  };
  Payments: {
    title: string;
    description: string;
    data: MarketplacePaymentType[];
  };
};

/* ************* */
/* HEALTHCARE TYPES */

type HealthcarePatientType = {
  Patient_ID: number;
  First_Name: string;
  Last_Name: string;
  Date_Of_Birth: string;
  Gender: string;
  Email: string;
  Phone_Number: string;
  Address: string;
  Insurance_ID: string;
  Primary_Doctor_ID: number;
  Emergency_Contact: string;
};

type HealthcareDoctorType = {
  Doctor_ID: number;
  First_Name: string;
  Last_Name: string;
  Specialty: string;
  Email: string;
  Phone_Number: string;
  Office_Hours: string;
  Department: string;
};

type HealthcareAppointmentType = {
  Appointment_ID: number;
  Patient_ID: number;
  Doctor_ID: number;
  Appointment_Date: string;
  Time: string;
  Status: string;
  Reason: string;
  Notes: string | null;
};

type HealthcareMedicalRecordType = {
  Record_ID: number;
  Patient_ID: number;
  Doctor_ID: number;
  Date: string;
  Diagnosis: string;
  Treatment: string;
  Notes: string | null;
};

type HealthcareBillingType = {
  Billing_ID: number;
  Patient_ID: number;
  Appointment_ID: number;
  Amount: string;
  Payment_Status: string;
  Payment_Date: string;
  Payment_Method: string;
  Insurance_Claim: string;
  Claim_Status: string;
};

export type Healthcare = {
  Resources: Resource[];
  apiKey: string;
  agentId: string;

  Patients: {
    title: string;
    description: string;
    data: HealthcarePatientType[];
  };
  Doctors: {
    title: string;
    description: string;
    data: HealthcareDoctorType[];
  };
  Appointments: {
    title: string;
    description: string;
    data: HealthcareAppointmentType[];
  };
  MedicalRecords: {
    title: string;
    description: string;
    data: HealthcareMedicalRecordType[];
  };
  Billing: {
    title: string;
    description: string;
    data: HealthcareBillingType[];
  };
};

/* ************* */
/* EDUCATION TYPES */

type EducationStudentType = {
  Student_ID: number;
  First_Name: string;
  Last_Name: string;
  Date_Of_Birth: string;
  Gender: string;
  Email: string;
  Phone_Number: string;
  Address: string;
  Major: string;
  Year: string;
  GPA: number;
  Advisor_ID: number;
  Enrollment_Date: string;
  Graduation_Date: string;
};

type EducationFacultyType = {
  Faculty_ID: number;
  First_Name: string;
  Last_Name: string;
  Department: string;
  Email: string;
  Phone_Number: string;
  Office_Hours: string;
  Position: string;
};

type EducationCourseType = {
  Course_ID: number;
  Course_Name: string;
  Department: string;
  Credits: number;
  Semester: string;
  Instructor_ID: number;
  Capacity: number;
  Enrolled: number;
  Schedule: string;
};

type EducationEnrollmentType = {
  Enrollment_ID: number;
  Student_ID: number;
  Course_ID: number;
  Enrollment_Date: string;
  Grade: string;
};

type EducationExamType = {
  Exam_ID: number;
  Course_ID: number;
  Exam_Date: string;
  Exam_Time: string;
  Location: string;
  Type: string;
};

type EducationSupportTicketType = {
  Ticket_ID: number;
  Student_ID: number;
  Issue_Type: string;
  Description: string;
  Date_Submitted: string;
  Resolution_Status: string;
  Resolution_Description: string | null;
};

export type Education = {
  Resources: Resource[];
  apiKey: string;
  agentId: string;

  Students: {
    title: string;
    description: string;
    data: EducationStudentType[];
  };
  Faculty: {
    title: string;
    description: string;
    data: EducationFacultyType[];
  };
  Courses: {
    title: string;
    description: string;
    data: EducationCourseType[];
  };
  Enrollments: {
    title: string;
    description: string;
    data: EducationEnrollmentType[];
  };
  Exams: {
    title: string;
    description: string;
    data: EducationExamType[];
  };
  SupportTickets: {
    title: string;
    description: string;
    data: EducationSupportTicketType[];
  };
};

/* ************* */
/* HOSPITALITY TYPES */

type HospitalityRoomType = {
  Room_ID: number;
  Room_Number: string;
  Room_Type: string;
  Smoking_Allowed: boolean;
  Price_Per_Night: string;
  Bed_Type: string;
  Occupancy: number;
  Room_Status: string;
  Floor: number;
  View: string;
  Room_Amenities: string;
};

type HospitalityUserType = {
  User_ID: number;
  Guest_Name: string;
  Guest_Email: string;
  Phone_Number: string;
  Loyalty_Status: string;
  Address: string;
  Date_Of_Birth: string;
  Nationality: string;
};

type HospitalityAmenityType = {
  Amenity_ID: number;
  Amenity_Name: string;
  Description: string;
};

type HospitalityServiceType = {
  Service_ID: number;
  Service_Name: string;
  Description: string;
  Price: string;
};

export type Hospitality = {
  Resources: Resource[];
  apiKey: string;
  agentId: string;

  Rooms: {
    title: string;
    description: string;
    data: HospitalityRoomType[];
  };
  Users: {
    title: string;
    description: string;
    data: HospitalityUserType[];
  };
  Amenities: {
    title: string;
    description: string;
    data: HospitalityAmenityType[];
  };
  Services: {
    title: string;
    description: string;
    data: HospitalityServiceType[];
  };
};

/* ************* */
/* ONLINE CASINO TYPES */

type UserType = {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: "Admin" | "Member" | "Guest";
  created_at: string;
  last_login: string;
  is_active: boolean;
};

type ProjectType = {
  project_id: number;
  project_name: string;
  description: string;
  owner_id: number; 
  created_at: string; 
  deadline: string; 
  status: "Active" | "Completed";
};

type TaskType = {
  task_id: number;
  task_name: string;
  description: string;
  project_id: number;
  assigned_to: number;
  status: "To Do" | "In Progress" | "Done";
  priority: "Low" | "Medium" | "High";
  created_at: string;
  due_date: string;
  completed_at: string | null;
};

type CommentType = {
  comment_id: number;
  task_id: number;
  user_id: number;
  comment_text: string;
  created_at: string;
};

type TimeTrackingType = {
  time_entry_id: number;
  task_id: number;
  user_id: number;
  start_time: string;
  end_time: string;
  total_hours: number;
};

type IntegrationType = {
  integration_id: number;
  user_id: number;
  integration_name: string;
  status: "Active" | "Inactive";
  added_on: string;
};

type NotificationType = {
  notification_id: number;
  user_id: number;
  message: string;
  status: "Read" | "Unread";
  created_at: string;
};


export type SaaS = {
  Resources: Resource[];
  apiKey: string;
  agentId: string;

  Users: {
    title: string;
    description: string;
    data: UserType[];
  };
  Projects: {
    title: string;
    description: string;
    data: ProjectType[];
  };
  Tasks: {
    title: string;
    description: string;
    data: TaskType[];
  };
  Comments: {
    title: string;
    description: string;
    data: CommentType[];
  };
  TimeTracking: {
    title: string;
    description: string;
    data: TimeTrackingType[];
  };
  Integrations: {
    title: string;
    description: string;
    data: IntegrationType[];
  };
  Notifications: {
    title: string;
    description: string;
    data: NotificationType[];
  };
};
