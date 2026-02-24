#### Answers to Questions

#### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
1. Ans: The difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll is:-
#  getElementById()
   It finds one element using its id.
   id must be unique.
   It returns only one element.

# getElementsByClassName()
   It finds elements using class name.
   Many elements can have same class.
   It returns a htmlCollection -> like an array.

# querySelector()
   It selects the first matching element using CSS selector.
   It Uses css style selector.
   It Returns only one element.

# querySelectorAll()
   It selects ALL matching elements.
   It Uses css selector.
   It Returns a NodeList -> like array.


#### 2. How do you create and insert a new element into the DOM?
2. Ans: I will create and insert a new element into the DOM is 3 steps:-
#  Step 1: Create the Element
   Const element = document.createElement("h1");

#  Step 2: Customize the Element.
   element.innerText = "Hello World!";

#  Step 3: Insert appendChild the Element.
   parent.appendChild(element);


#### 3. What is Event Bubbling? And how does it work?
3. Ans: Event Bubbling means:-
   When I click on a child element,
   The event first runs on that element,
   Then it goes up to its parent,
   Then to grandparent,
   Then up to body, html, and document.


#### 4. What is Event Delegation in JavaScript? Why is it useful?
4. Ans: Event Delegation means:-
   Instead of adding event listener to many child elements,
   I add one event listener to the parent, and handle child events using event bubbling.

## Event Delegation is useful because:-
   Better performance > less event listeners.
   Cleaner code.
   Works for dynamically added elements.
   Very easy to manage code.

#### 5. What is the difference between preventDefault() and stopPropagation() methods?
5. Ans: The difference between preventDefault() and stopPropagation() methods is:-
1. preventDefault() methods works:
   It stops the default behavior of an element.
   It does not stop event bubbling.
   Normally form reloads page when submitted.
   preventDefault() stops page reload.

#  stopPropagation() methods works:
   It stops event bubbling moving to parent.
   It does not stop default behavior.