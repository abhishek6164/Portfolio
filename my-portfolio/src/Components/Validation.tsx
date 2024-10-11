export default function Validation(id: string, value: string): string {
  switch (id) {
    case "name":
      if (value.trim().length === 0) return "Name is required";
      if (value.trim().length < 3)
        return "Name must be at least 3 characters long";
      return "";
    case "email":
      if (value.trim().length === 0) return "Email is required";
      if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value))
        return "Invalid email format";
      return "";

    case "message":
      if (value.trim().length === 0) return "Message is required";
      return "";
    // Add more cases for other fields if needed
    default:
      return "";
  }
}
