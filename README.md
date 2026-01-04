# CommentPulse
Analyze the tone and toxicity of a comment

## Inspiration
I was inspired by TikTok. I share my favorites on social media, and I get a lot of positive comments under my posts, but I also follow a lot of creators who receive a ton of hate comments. You can also view hate comments on the for you page, and they affect not only the creator but the readers, too. It affects mental health and influences the reader's behaviors and thoughts about the person being bullied. It is important to pay attention to how one uses their voice on social media so we can prevent cyberbullying. 

## What it does
This project takes a comment as input and the server sends the text to Gemini API. The API analyzes the text and determines three things: the tone, the toxicity, and then rewrites the comment. The web app saves every resulting analysis into MongoDB so I have a history of the analysis.

## Example
<img width="1256" height="694" alt="Screenshot 2026-01-03 at 9 42 01 PM" src="https://github.com/user-attachments/assets/70025dc9-5c47-4280-a1b0-02e9f9bfb16c" />

<img width="1254" height="685" alt="Screenshot 2026-01-03 at 9 42 15 PM" src="https://github.com/user-attachments/assets/d45da63c-f538-405b-8b10-c26f3717d4cc" />

## How we built it
I built it using VS Code, JavaScript. I installed the  'MongoDB with Vscode' extension and made a string connection with the server.  I added the Gemini API key to the JavaScript file and made a post request. 
 
## Challenges we ran into
The challenge was that initially, the API key was not loading into my project, and I was getting a '404 Not Found' error each time I tried to analyze a comment. And it was because of the Gemini model that I used. I was using an older version of the model and had to upgrade to the latest version, which is "gemini-2.5-flash". And the code was successful in analyzing the comments.

## Accomplishments that we're proud of
I am proud of completing the project and finding comments that are toxic, and finding a way to educate the user about how to rephrase their speech.

## What we learned
I learned that there is power in your words, and toxic comments have a huge effect on mental health and how others perceive you.

## What's next for CommentPulse
I believe this project can be used by others on social media. I can create an extension sort of like Grammarly that rephrases your comments as you write them.


