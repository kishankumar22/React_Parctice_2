// src/components/NotificationDataLoader.jsx

export const fetchNotifications = async () => {
    try {
      const response = await fetch("/NotificationUpdate.txt"); // Fetch from public folder
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
  
      const text = await response.text();
      console.log("Fetched Text:", text); // Raw text for debugging
  
      const notifications = text.split("\n").filter(Boolean).map((line) => {
        const notification = {};
        line.split(";").forEach((pair) => {
          const [key, value] = pair.split("=");
          if (key && value) notification[key.trim()] = value.trim();
        });
        return notification;
      });
  
      console.log("Parsed Notifications:", notifications); // Debug parsed notifications
      return notifications;
    } catch (error) {
      console.error("Failed to load notifications:", error.message);
      return [];
    }
  };
  