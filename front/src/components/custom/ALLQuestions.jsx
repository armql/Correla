import React from "react";
import Questions from "./Questions";

export default function ALLQuestions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      <Questions
        questionTitle={"What services do you offer at your dental clinic?"}
        questionAnswer={
          "At our dental clinic, we offer a wide range of services including routine check-ups, cleanings, teeth whitening, dental implants, braces, and more. Our experienced team is here to address all your dental needs."
        }
      />

      <Questions
        questionTitle={"How often should I schedule a dental check-up?"}
        questionAnswer={
          "We recommend scheduling a dental check-up every six months. Regular check-ups help us catch and prevent dental issues before they become major problems, ensuring your oral health remains in top condition."
        }
      />

      <Questions
        questionTitle={"Do you accept dental insurance?"}
        questionAnswer={
          "Yes, we accept a variety of dental insurance plans. Please contact our office with your insurance information, and our staff will assist you in understanding your coverage and payment options."
        }
      />

      <Questions
        questionTitle={"Are emergency dental appointments available?"}
        questionAnswer={
          "Absolutely. If you have a dental emergency, please call our clinic immediately. We'll do our best to accommodate you as soon as possible, ensuring you get the care you need."
        }
      />

      <Questions
        questionTitle={
          "What should I do if I experience tooth pain or discomfort?"
        }
        questionAnswer={
          "If you're experiencing tooth pain, rinse your mouth with warm water and floss to remove any potential debris. If the pain persists, contact our clinic to schedule an appointment. Tooth pain could be a sign of an underlying issue that requires professional attention."
        }
      />
      <Questions
        questionTitle={"How can I improve my oral hygiene at home?"}
        questionAnswer={
          "To maintain good oral hygiene, brush your teeth at least twice a day, floss daily, and use an antimicrobial mouthwash. It's also essential to maintain a balanced diet and limit sugary snacks and drinks."
        }
      />

      <Questions
        questionTitle={
          "What is the cost of procedures like fillings or cleanings?"
        }
        questionAnswer={
          "The cost of dental procedures can vary based on several factors, including the type of treatment needed and your insurance coverage. We offer a transparent fee schedule, and our team can provide you with an estimate during your visit."
        }
      />

      <Questions
        questionTitle={"How do I make an appointment with your clinic?"}
        questionAnswer={
          "You can schedule an appointment by calling our office or using our online appointment booking system on our website. We'll work with you to find a convenient time for your visit."
        }
      />

      <Questions
        questionTitle={"Are your dental procedures painful?"}
        questionAnswer={
          "We strive to make your experience as comfortable as possible. Most dental procedures are performed with local anesthesia, which minimizes pain. Our team is trained to ensure your visit is as pain-free and stress-free as possible."
        }
      />

      <Questions
        questionTitle={
          "Do you work cosmetic dentistry, such as teeth whitening or veneers?"
        }
        questionAnswer={
          "Yes, we offer a range of cosmetic dentistry services, including teeth whitening, veneers, and more. Our goal is to help you achieve a beautiful and confident smile."
        }
      />

      <Questions
        questionTitle={"What age groups do you provide dental care for?"}
        questionAnswer={
          "We provide dental care for patients of all age groups, from children to seniors. Our team is experienced in addressing the unique needs of each age group."
        }
      />

      <Questions
        questionTitle={"Do you offer sedation dentistry for nervous patients?"}
        questionAnswer={
          "Yes, we offer sedation options for patients who experience dental anxiety or fear. Our team will discuss these options and help you choose the one that suits your needs."
        }
      />

      <Questions
        questionTitle={"How long does a typical dental appointment take?"}
        questionAnswer={
          "The duration of a dental appointment can vary depending on the type of service needed. A routine check-up usually takes around 30 minutes."
        }
      />

      <Questions
        questionTitle={"Can I bring my child for their first dental visit?"}
        questionAnswer={
          "We encourage parents to bring their children for their first dental visit around the age of one or when their first tooth emerges. This helps establish good oral health habits from an early age."
        }
      />

      <Questions
        questionTitle={"What safety measures are in place to protect patients?"}
        questionAnswer={
          "Our clinic strictly follows all recommended COVID-19 safety protocols, including enhanced cleaning, social distancing, and mandatory mask-wearing. We prioritize the health and safety of our patients and staff."
        }
      />
    </div>
  );
}
