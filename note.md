### Transitoin
Set state update as unurgent one to do not block UI when doing complex time comsuming state upate. 
It yield back every 5ms to main thread.

### Actions
By convention, functions that use async transitions are called “Actions”

- Async Functions that have transition nature called actions.
- Event Raw functions, not created using useTransition() or useActionState() get action natures(transition) when pass through form `action` attribute.

### useActionState()
useActionState() is a hook to create action. It helps to handle form submission

- transition nature
- create a state for data
- provide pending state for action


### useOptimistic()
- only able to call it's dispatcher under transition or action