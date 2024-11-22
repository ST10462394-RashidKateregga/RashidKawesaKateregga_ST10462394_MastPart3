How to Use

Add Menu Items
Start the app.
On the Home screen, tap "Go to Add Menu."
Fill in the details for the dish and tap "Add Dish."
View Menu
All added items will appear on the Home screen.
Items are displayed with their details.
Filter Menu
Navigate to "Filter Menu" to filter items by course.
Tap a course to filter, or clear filters to view all items.
Changes Log

General Improvements
Navigation Adjustments:
Replaced incorrect navigation.navigate() calls with properly typed route parameters to resolve TypeScript errors.
Updated "Back" buttons on all screens to navigate back to the Home screen instead of the previous screen.
TypeScript Error Fixes:
Resolved issues with type mismatches in navigation parameters by properly defining and passing RootStackParamList types across all screens.
Ensured newItem and menuItems were correctly typed as arrays of objects with the required structure.
Feature Additions
Local State Management:
Introduced React Context to manage menu items across screens for better state sharing and persistence within a session.
Persistent Item Saving:
Added functionality to store menu items in a shared array using React Context, making them accessible across the app without dependency on navigation parameters.
Filter by Course:
Implemented course-based filtering on the "Filter Menu" screen.
Added a "Clear Filter" option to reset filters and display all menu items.
Price Display and Calculation:
Displayed prices formatted to two decimal places for consistency.
(Optional improvement) Added a function to calculate the average price per course for potential display on the Home screen.
Screen-Specific Changes
Home Screen:
Updated to display all menu items saved in Context.
Adjusted navigation logic to accommodate changes in item management.
Add Menu Screen:
Improved form validation to ensure valid data entry (e.g., non-empty fields and numeric price).
Automatically redirects to the Home screen after adding an item.
Filter Menu Screen:
Added dynamic filtering options for different courses.
Adjusted navigation to ensure all changes persist.
