// Training additions are explicitly fictional or pending process-owner validation.
// Replace the former static final challenge with a worked example, active practice
// and an honest review gate. Keep the final 10-question assessment unchanged.
slides.splice(20, 1,
  ["A clear request, worked through",
   "A fictional training example showing how to explain a problem, desired outcome, scope and value. These are drafting prompts, not a verified list of JANE form fields.",
   "Worked example"],
  ["Your turn: prepare the request",
   "Improve a fictional request, compare your draft with a worked example, then work through three decisions with feedback. This is a practice activity, not a submission to JANE.",
   "Practice"],
  ["Before you use this for real",
   "Use the confirmed Wyre process and live form. The supplied presentation contains points that need process-owner validation; this module does not resolve them by assumption.",
   "Review and handover"]
);

const workedRequest = [
  ["Request title", "Validate the reference number before an internal form is submitted."],
  ["Current problem", "In this fictional scenario, 10 out of 50 monthly requests arrive without a reference number. The receiving team must contact the requester before processing can begin."],
  ["Desired outcome", "When the reference field is empty, prevent submission and display a clear message beside that field. With a reference entered, retain the existing submission flow."],
  ["Scope", "One existing application and one team. No new applications or integrations; no partner, Servco or cross-team dependencies. No material analysis or detailed project plan is needed."],
  ["Expected value", "Training assumption: reduce incomplete requests from 10 to 2 per month. At five minutes of follow-up per incomplete request, the estimated saving is 40 minutes per month. The Business Owner must validate real figures."],
  ["Size and impact", "For the exercise, assume XS/S effort within one month, a simple low-risk deployment and no significant process change, formal training, communication or BPV testing. Assume no related Demand Cockpit item or other small changes on the same topic."],
  ["Ownership and route", "The fictional Business Owner supports the proposed solution. Small Change is the proposed route under the stated exercise assumptions, with the Product Owner as driver. Validate the applicable Small Change criteria with the process owner before using this route for real."],
  ["Approval and classification", "Before a real submission, obtain the required approval through the confirmed Domain SteerCo and/or SLT Sponsor route, and choose a currently approved Component. Neither approval nor a Component value is invented in this example."]
];

const practiceSteps = [
  {
    title: "Is this request ready?",
    scenario: 'You receive this draft: “Please improve the form. It wastes time.” The draft contains no desired outcome, motivated value or approval information.',
    choices: ["Submit it now and fill in the details later.", "Clarify the problem and outcome, motivate the value and verify approval first.", "Create a card directly on the Board to make it visible."],
    correct: 1,
    feedback: [
      "Not yet. The request is too vague and the required approval has not been verified. Complete the intake information before submitting.",
      "Correct. A clear request explains the problem, the desired result and its value. Verify the required approval and complete the live form's mandatory fields.",
      "The presentation explicitly says that new Change Requests start through an intake form, not directly on the Board."
    ]
  },
  {
    title: "Which route fits the exercise?",
    scenario: "Use the worked example: one existing application, one team, no integrations or cross-team dependencies, XS/S effort within a month, low risk and no formal training. All five governance conditions and the eight IT conditions are assumed met for this fictional case.",
    choices: ["Treat any one-team change as Small, regardless of other criteria.", "Create an unlogged task because the work is small.", "Propose Small Change, with the Product Owner driving it; confirm the applicable criteria before real use."],
    correct: 2,
    feedback: [
      "One-team impact alone is not enough. The presentation includes other scope, effort, governance and risk conditions.",
      "Even a small change must be formally logged. Lighter governance does not mean bypassing intake.",
      "Correct for the stated exercise assumptions. The presentation gives the Product Owner the driver role for Small Changes. The relationship between the five and eight criteria still needs Wyre validation for the final module."
    ]
  },
  {
    title: "Respond to Form Incomplete",
    scenario: "You are the Business Owner. After submission, the request is marked Form Incomplete because the desired outcome needs clarification. You are not the driver.",
    choices: ["Clarify the missing information in the request, then coordinate the next step with the responsible team or driver.", "Move the request straight to Analysis yourself.", "Submit a second request with the missing information."],
    correct: 0,
    feedback: [
      "Correct. Improve the existing request and coordinate the next step. Only the driver changes the status; a duplicate request is not the solution.",
      "Only the driver changes the request status. Complete the missing information instead of moving the request yourself.",
      "Update the existing request rather than creating a duplicate. Keep the record and its context together."
    ]
  }
];

const validationPoints = [
  ["Design or Planning first?", "Slides 7 and 24 place Design before Planning; slide 11 places Planning before Design.", "Confirm whether the governance phases and Jira statuses intentionally differ, or correct the sequence."],
  ["Five criteria or eight?", "Slide 9 gives five Small Change governance criteria; slide 26 gives eight IT criteria.", "Confirm how the two sets relate and which decision rule requesters must apply."],
  ["Which Components are approved?", "Slide 21 explicitly states that its Component examples are not final.", "Provide the current approved Component values. Do not use the draft list as a production reference."],
  ["Approvals, access and support", "Slides 12, 13 and 25 refer to SiD, JANE, intake forms and Domain SteerCo and/or SLT Sponsor approval.", "Verify working access/form links, the correct approval route and the contact for process questions."]
];
