"use client";

import React from "react";

const FAQ = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-gray-100">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
          Frequently Asked Questions
        </h1>

        <div className="mt-8">
          <AccordionItem
            question="What is MultiVersus Nexus?"
            answer="The purpose of our server is to create a vibrant and inclusive community for players of the game MultiVersus. We aim to bring together enthusiasts from all over to hang out, play together, and enjoy the game to its fullest. Our server offers a variety of features, including:

- **Tournaments with Prizes:** Regularly scheduled tournaments where players can compete for exciting rewards.
- **Server Bot:** A dedicated server bot that provides assistance with server navigation and information about MultiVersus.
- **Game Updates:** Timely updates about everything related to MultiVersus, including new patches, roster additions, and bug fixes.
- **Guides and Tips:** Comprehensive guides and tips to help players improve their gameplay and strategies.

Join us to connect with other MultiVersus fans, stay updated on the latest game developments, and enhance your gaming experience!"
          />
          <AccordionItem
            question="How do I join MultiVersus Nexus?"
            answer="Joining MultiVersus Nexus is easy! Just copy paste in a new browser the invite link: https://discord.gg/se4CYmtE4w We look forward to seeing you in the community!"
          />
          <AccordionItem
            question="Can I invite my friends to join MultiVersus Nexus?"
            answer="Yes, you can absolutely invite your friends to join MultiVersus Nexus! We encourage you to bring your friends along to join our community and enjoy the game together. Just share this invite link with them: https://discord.gg/se4CYmtE4w The more, the merrier!"
          />
          <AccordionItem
            question="Is MultiVersus Nexus free to join?"
            answer="Yes, MultiVersus Nexus is completely free to join! There are no costs or fees associated with becoming a member of our community. Simply click on the invite link and join us: https://discord.gg/se4CYmtE4w"
          />
          <AccordionItem
            question="How can I contact MultiVersus Nexus?"
            answer="You can contact us in two ways:
    <br>
    1. Via email at multiversusnexus.info@gmail.com
    <br>
    2. Join our Discord server and use the designated channel to contact our moderators. Here's the invite link to join: https://discord.gg/se4CYmtE4w"
          />
          <AccordionItem
            question="What are the rules of MultiVersus Nexus?"
            answer="To keep our server fun, friendly, and safe for everyone, we have a few important rules. Please read and follow them carefully:

1. Respect Everyone
   - Zero Tolerance for Bullying: Any form of bullying, harassment, or intimidation is strictly prohibited.
   - No Hate Speech: Absolutely no racist, sexist, homophobic, or otherwise discriminatory language or behavior.
   - Be Kind: Treat everyone with kindness and respect. Disagreements are natural, but always remain civil.

2. Keep It Clean
   - No Profanity or Offensive Language: Avoid using bad words or any language that could be offensive to others.
   - Family-Friendly Content: All content shared should be appropriate for all ages. No NSFW (Not Safe For Work) content.

3. Stay On-Topic
   - Relevant Discussions: Keep discussions relevant to Multiversus and related topics. Use designated channels for off-topic conversations.
   - No Spam: Do not spam messages, emojis, or links. Keep the chat clean and enjoyable for everyone.

4. Protect Privacy
   - No Personal Information: Do not share your own or anyone else's personal information (addresses, phone numbers, etc.).
   - Respect Boundaries: Do not pressure others to share personal details.

5. Use Channels Properly
   - Follow Channel Guidelines: Each channel has a specific purpose. Make sure to read the channel descriptions and post accordingly.
   - Event and Announcement Channels: Do not post in channels meant for announcements or events unless you have permission.

6. No Unauthorized Promotions
   - No Advertising: Do not advertise other Discord servers, products, or services without permission from the admin team.
   - No Self-Promotion: Self-promotion is only allowed in designated channels, if any.

7. Report Issues
   - Report Rule Violations: If you see someone breaking the rules, report it to the moderators immediately.
   - Do Not Engage: Do not engage with rule-breakers. Let the moderators handle it.

8. Follow Discord’s Terms of Service
   - Compliance: Make sure you comply with Discord’s Terms of Service and Community Guidelines.

Breaking any of these rules can result in a warning, temporary mute, or ban, depending on the severity of the offense. Let's work together to keep this community positive and enjoyable for everyone."
          />
          <AccordionItem
            question="How do I report a problem or issue on MultiVersus Nexus?"
            answer="Reporting a problem or issue on MultiVersus Nexus is easy! Simply use our dedicated channel for reporting within our Discord server. Feel free to discuss any concerns or issues you encounter, and our moderators will assist you promptly. Join our Discord server using this invite link: https://discord.gg/se4CYmtE4w and head to the designated channel for assistance."
          />
          <AccordionItem
            question="Can I suggest new features or improvements for MultiVersus Nexus?"
            answer="Absolutely! We welcome your suggestions for new features or improvements to enhance your experience on MultiVersus Nexus. Please share your ideas in our dedicated suggestions channel on our Discord server. Join us at https://discord.gg/se4CYmtE4w and head to the suggestions channel to contribute your thoughts. We look forward to hearing from you!"
          />
          <AccordionItem
            question="Is my personal information safe on MultiVersus Nexus?"
            answer="Yes, your personal information is completely safe on MultiVersus Nexus. We prioritize the security and privacy of our members. Rest assured that we do not collect or share personal information without your consent. If you have any concerns about privacy or data security, feel free to reach out to us via email at multiversusnexus.info@gmail.com or through our Discord server where you can contact our moderators directly."
          />
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-t border-gray-200">
      <button
        className="flex justify-between w-full p-4 text-left text-xl font-semibold text-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span
          className={`${
            isOpen ? "transform rotate-180" : ""
          } transition-transform duration-300 text-gray-600`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-800">
          <p className="text-lg text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
