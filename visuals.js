// Crops from the user-supplied PowerPoint, not original JANE screenshots.
const presentationVisuals = {
  9: {
    src: "visuals/intake-forms.png",
    title: "Choose the right intake form",
    alt: "Presentation illustration showing Small Change Request and Standard Change Request Intake form cards.",
    source: 13,
    note: "Select the appropriate form. A new Change Request should not be created directly on the Board.",
    provenance: "Form dates removed."
  },
  10: {
    src: "visuals/change-request-board.png",
    title: "Locate your request on the Board",
    alt: "Illustrative Board from the presentation with status columns and neutral DEMO tickets. Requests start in New.",
    source: 14,
    note: "Look for the New column after submission, then follow the request through the status columns.",
    provenance: "Ticket identifiers and descriptions replaced with neutral examples; counts removed and abbreviated status headings expanded."
  },
  12: {
    src: "visuals/change-request-item.png",
    title: "Recognise the Change Request details",
    alt: "Illustrative Change Request item showing Analysis status, Assignee, Business Owner, Business SPOC, Product Owner, Labels and Components.",
    source: 15,
    note: "Check ownership and keep the item details current. Only the driver changes the status.",
    provenance: "Internal names retained with permission. Ticket and other values adapted for demonstration."
  },
  14: {
    src: "visuals/comments.png",
    title: "Find the Comments panel",
    alt: "Activity panel from the presentation with Comments, History and Work log tabs, an Add a comment field and a comment by Eveline Yaman naming Dimitri Van den Eynde and Philippe Hendrickx.",
    source: 17,
    note: "Use the comment field for concise updates and @mentions. This image is an illustration, not an interactive comment box.",
    provenance: "Original comment panel; internal names retained with permission."
  },
  15: {
    src: "visuals/attachments-menu.png",
    title: "Use Add attachment or Add web link",
    alt: "Illustrative issue menu showing Add attachment and Add web link highlighted in green.",
    source: 18,
    note: "Choose Add attachment for a file, or Add web link for an approved online resource.",
    provenance: "Menu crop; original ticket title excluded."
  },
  16: {
    src: "visuals/filters.png",
    title: "Save a useful filter",
    alt: "Illustrative JQL filter panel with the example query project equals CRQ and status equals New, and a Save filter button.",
    source: 19,
    note: "This adapted example filters for New requests. Save useful filters for later reuse.",
    provenance: "Original person-specific query replaced with a neutral status filter."
  },
  17: {
    src: "visuals/backlog.png",
    title: "Recognise the backlog view",
    alt: "Backlog illustration containing one neutral DEMO change request.",
    source: 20,
    note: "The Transformation Team manages this holding area. Add context through comments rather than changing the status yourself.",
    provenance: "Original ticket identifier, title and counts replaced with neutral example data."
  }
};
