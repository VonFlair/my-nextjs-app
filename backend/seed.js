// seed.js – seed tasks with multi‐relation field linking to existing stages
import PocketBase from 'pocketbase';

async function seed() {
  const pb = new PocketBase('http://127.0.0.1:8090');

  // 1) Admin login (replace with your admin credentials)
  console.log('Logging in as admin…');
  await pb.admins.authWithPassword(
    'madd_hacks@homekey.com',   // ← your admin email
    'Testing@12345'             // ← your admin password
  );
  console.log('✓ Admin authenticated.');

  // 2) Name of your multi‐relation field in the "tasks" collection
  const relationField = 'field';  // ← change if your relation field ID is different

  // 3) Define the checklist tasks for each stage title
  const tasksByStage = {
    'Define Goals': [
      'Complete Homekey goals questionnaire',
      'Establish max monthly payment & down-payment',
      'Identify preferred neighborhoods/school districts',
      'List must-have vs. nice-to-have features',
    ],
    'Credit Check & Preapproval': [
      'Pull tri-merge credit report',
      'Dispute any errors or fraud flags',
      'Gather W-2s, pay stubs, bank statements',
      'Submit pre-approval application through Homekey',
      'Review and save pre-approval letter',
    ],
    'Mortgage Shopping': [
      'Compare fixed vs. ARM scenarios',
      'Request loan estimates from 3+ lenders',
      'Evaluate APR, closing costs, PMI',
      'Select preferred lender & program',
      'Lock interest rate (if desired)',
    ],
    'Property Search & Tours': [
      'Set MLS search filters in Homekey',
      'Review new listings daily',
      'Schedule private showings/open houses',
      'Attend virtual or in-person tours',
      'Compare pros & cons in saved list',
    ],
    'Offer & Negotiation': [
      'Analyze comps & offer price with AI advisor',
      'Select contingencies (inspection, financing, appraisal)',
      'Draft purchase offer',
      'Submit offer via agent/Homekey portal',
      'Negotiate counteroffers & finalize terms',
      'Sign purchase agreement',
    ],
    'Earnest Money Deposit': [
      'Receive escrow wire instructions',
      'Initiate wire or ACH for earnest money',
      'Confirm receipt with escrow officer',
      'Store deposit receipt in documents folder',
    ],
    'Home Inspection': [
      'Hire licensed home inspector',
      'Attend inspection (optional)',
      'Receive & review inspection report',
      'Request repairs or credits',
      'Release inspection contingency',
    ],
    'Appraisal': [
      'Lender schedules appraiser visit',
      'Provide recent comps to appraiser',
      'Appraiser inspects property',
      'Receive appraisal report',
      'Address appraisal gap (if any)',
    ],
    'Title Search & Insurance': [
      'Order preliminary title report',
      'Review for liens or encumbrances',
      'Resolve title issues (if present)',
      'Purchase owner’s title insurance',
      'Receive Clear-to-Close on title',
    ],
    'Underwriting & Loan Commitment': [
      'Upload final pay stubs & bank updates',
      'Satisfy underwriting conditions',
      'Receive Final Loan Approval (CTC)',
      'Review Closing Disclosure (CD)',
    ],
    'Final Walk-through': [
      'Schedule walk-through 24h before close',
      'Verify agreed-upon repairs complete',
      'Confirm appliances & fixtures present',
      'Approve condition in Homekey app',
    ],
    'Closing & Funding': [
      'Schedule closing appointment/mobile notary',
      'Review & e-sign closing docs',
      'Wire remaining funds to escrow',
      'Lender funds loan',
      'County records deed & keys delivered',
    ],
    'Prep & Repairs': [
      'Declutter and depersonalize rooms',
      'Hire cleaners & landscapers',
      'Complete minor repairs & paint touch-ups',
      'Stage key rooms (or virtual staging)',
      'Take preliminary condition photos',
    ],
    'Hire Agent & Pricing': [
      'Interview 2-3 listing agents',
      'Review AI-generated CMA report',
      'Sign listing agreement',
      'Set listing price & strategy',
    ],
    'Staging & Photography': [
      'Finalize staging setup',
      'Schedule professional photography',
      'Capture twilight & drone shots',
      'Approve retouched photos',
      'Draft marketing copy',
    ],
    'MLS Listing': [
      'Enter MLS details & features',
      'Upload high-resolution photos',
      'Publish listing live',
      'Verify Zillow/Realtor.com syndication',
    ],
    'Marketing & Showings': [
      'Launch social & PPC ad campaigns',
      'Schedule first open house',
      'Confirm private showing requests',
      'Collect buyer feedback & update listing',
    ],
    'Offers & Negotiations': [
      'Review incoming offers & score with AI',
      'Request highest & best (if multiple)',
      'Draft counteroffer terms',
      'Accept best offer & sign contract',
    ],
    'Inspection & Repair Requests': [
      'Receive buyer inspection report',
      'Obtain repair bids via AI vendor match',
      'Negotiate repair credits or fixes',
      'Sign repair addendum',
    ],
    'Escrow & Underwriting': [
      'Deliver seller disclosures',
      'Sign escrow instructions',
      'Resolve title/escrow conditions',
      'Provide payoff & HOA docs',
    ],
    'Closing & Transfer': [
      'Schedule signing appointment',
      'Sign grant deed & closing docs',
      'Turn off utilities & forward mail',
      'Hand over keys & garage remotes',
      'Receive sale proceeds wire',
    ],
  };

  // 4) Fetch existing stages from PocketBase
  console.log('\nFetching existing stages…');
  const stages = await pb.collection('stages').getFullList();
  console.log(`✓ Found ${stages.length} stages.`);

  // 5) Create tasks in bulk, linking via the multi-relation field
  console.log(`\nSeeding tasks (relation field: "${relationField}")…`);
  for (const stage of stages) {
    const taskList = tasksByStage[stage.title];
    if (!taskList) {
      console.warn(`⚠ No task list for stage "${stage.title}".`);
      continue;
    }
    console.log(`\n-- Stage: "${stage.title}" (${taskList.length} tasks)`);

    for (const taskTitle of taskList) {
      try {
        const created = await pb.collection('tasks').create({
          [relationField]: [stage.id],  // set multi-relation to array of one stage ID
          title: taskTitle,
          isCompleted: false,
        });
        console.log(`   ✔ Created Task: "${created.title}" (ID: ${created.id})`);
      } catch (err) {
        console.error(`   ✖ Failed to create "${taskTitle}":`, err.originalError?.data || err);
      }
    }
  }

  console.log('\n✅ All tasks seeded successfully!');
}

seed().catch(err => {
  console.error('\n❌ Seed script failed:', err);
  process.exit(1);
});
