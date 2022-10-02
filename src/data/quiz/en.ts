/* eslint-disable prettier/prettier */
const data = [
  {
    id: 1,
    question: 'A vehicle will be removed from circulation and impounded when',
    options: [
      'Exceed in more than 20 km/h the velocity permitted in the way by the one that to circulate',
      'License plates are expired',
      'Turn over the right with signal in red',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 2,
    question: 'If you and your passengers wear seat belts',
    options: [
      'The possibility of wounds and/or death is diminished in case of accidents and a fine is avoided',
      'Have more risks in case of accident by be not able to leave quickly of the vehicle',
      'The corresponding fine is avoided only in federal highways',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 3,
    question: 'According to the law, the first offence of driving a vehicle in the third degree of drunkenness will result in',
    options: [
      'Final cancellation of its license, besides the corresponding fines',
      'Suspension of license for fifteen days, besides the corresponding fines',
      'Arrest for 36 hours and the corresponding fines',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 4,
    question: 'If you pay a ticket within 5 work days you will receive',
    options: [
      'A 75% discount',
      'A 50% discount',
      'A 25% discount',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 5,
    question: 'The law of traffic prohibits the use of tint or other elements that completely impede visibility toward the interior of the vehicle',
    options: [
      'True',
      'False',
      'Only on public transportation',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 6,
    question: 'According to the law of the services of highway administration, traffic and transportation, how many people are permitted to be transported in a "pick up"',
    options: [
      'Only the number of people that include the team of adequate protection',
      'The ones that go seated',
      'Only those specified in the card of circulation',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 7,
    question: 'The responsibility of police services of highway administration, traffic and transportation of the state of jalisco and their regulation is',
    options: [
      'To send off licenses to conduct',
      'Infraccionar to the conductive evils',
      'To govern the traffic in the public highways of the State of Jalisco, open to the circulation, that is not of federal jurisdiction',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 8,
    question: 'If driving a vehicle to a speed of 71 km/h and the posted speed is 60 km/h as maximum limit of speed, violater is subject to',
    options: [
      'Fines',
      'Detention of the vehicle',
      'Suspension of the license',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 9,
    question: 'It is an infraction to the law of traffic',
    options: [
      'To circulate by the far right',
      'To drive a vehicle with its windshield damaged in such a way that it interferes with the visibility',
      'To turn over the right with signal in red with precaution, prior high total and offering preference al pedestrian',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 10,
    question: 'Which is the maximum distance permitted to drive in reverse?',
    options: [
      '10 meters',
      '25 meters',
      '50 meters',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 11,
    question: 'A police officer can stop a vehicle for the purpose of verifying that the driver has the necessary documents for driving',
    options: [
      'True',
      'Yes, when carry plates of another state',
      'False',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 12,
    question: 'If a vehicle is found to have no registration, current plates, hologram, or the driver has no license, it is required',
    options: [
      'To expect the annual exchange',
      'To conclude operation of the vehicle while obtaining the necessary document(s)',
      'To travel with permission to circulate indefinitely',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 13,
    question: 'Is it motive for a fine if your vehicle has no windshield wipers?',
    options: [
      'True, because the law of traffic requires it',
      'Only for the public vehicles',
      'Only in epoch of rains, in case of emergency or in official vehicles',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 14,
    question: 'If you drive a motor vehicle in a state of drunkenness or under the influence of narcotics or psychotropic, you are committing:',
    options: [
      'Infraction and crime',
      'Abuse of authority',
      'An infraction and administrative lack',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 15,
    question: 'It is considered an infaction',
    options: [
      'To drive with total, or partly hidden plates',
      'To circulate with plates of another state',
      'To circulate with the holograms of previous years',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 16,
    question: 'It is prohibited to drive a motor vehicle, in the state of Jalisco, while using a cellular telephone',
    options: [
      'Yes',
      'No',
      'Unless hands-free accessories are being used',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 17,
    question: 'In the state of Jalisco, it is permitted to transport a child less than three years old in the front seat',
    options: [
      'Only when go in arms of an adult on',
      'Only when an adult, carrying placed the seat belt, hold it with the arms',
      'Only in the vehicles that have no rear seats, and they must be secured in a car seat',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 18,
    question: 'It is 12:00 at night and, while driving your vehicle, you arrive at a signal light that has turned red. There is no one else at the crossing and there is no danger to you, other vehicles, or pedestrians. Are you obliged to wait for the green light before advancing?',
    options: [
      'Yes, I am obliged to respect the signal without regard to the hour of the day',
      'Not, nobody is observing me, so I can pass me the red light of the signal',
      'Not, the Law of highway Administration offers me the benefit to pass me the red lights after the 12:00 at night',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 19,
    question: 'When an emergency vehicle is in service, with lights and siren, what should be done?',
    options: [
      'To Descend the velocity',
      'To Accelerate and to pass first',
      'Permit him the right-of-way, by pulling to the extreme right of the highway and stop',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 20,
    question: 'If you arrive at an intersection, with traffic being controlled by a police officer, what is he indicating if he is facing you or has his back to you with his arms downward?',
    options: [
      'Continue',
      'Preventive',
      'Stop',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 21,
    question: 'To drive a vehicle designed for the transportation of load, who’s capacity of load does not exceed three thousand five hundred kilograms, or cars of public utility, it is required to have a license of',
    options: [
      'Motorist',
      'Chauffeur',
      'Conductive of Services of Public Transportation',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 22,
    question: 'It is permitted the return to the left with the light of the signal in red?',
    options: [
      'Yes, as long as they come and enter a one-way street traffic, prior to the light turning red, while respecting the pedestrian crossing priority, without any indication that forbid and which is not public service vehicle collective passengers',
      'No, because the law and regulation of traffic only permit it to the right',
      'Yes, whenever an Avenue stem from or Worn with double sense of circulation, enter to a street of a single sense, prior high total, respecting the prelación in transit of the pedestrian, and that be not vehicle of collective service public of passengers',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 23,
    question: 'The plates, the gummed and the card of circulation are documents',
    options: [
      'Not transferable that identify al vehicle',
      'Necessary to perform the I endorse',
      'That are required for the obtaining of the license',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 24,
    question: 'When approaching a school patrol and they indicate to stop and yield to students, we are obliged to stop?',
    options: [
      'Yes we are obliged',
      'Not, because are not Authorities of highway Administration',
      'Only when a road agent accompanies them',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 25,
    question: 'Which are the vehicles that have priority in transit?',
    options: [
      'Vehicles of emergency in service with lights and siren',
      'Official vehicles of the City Hall and federal police',
      'Values transfer vehicles',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 26,
    question: 'At an intersection, having no priority to the flow of traffic in any direction, what does the traffic regulation require you to do?',
    options: [
      'Come to a total stop and yield to vehicle on your right',
      'To continue advancing to constant velocity if the street is of north to south',
      'To slow down al to approach me al, cruiser without doing high total, to cross faster',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 27,
    question: 'When the traffic officer is in a preventive position, advancing the arms slightly and fanning the hands in a steet of four lanes, what is he indicating?',
    options: [
      'Continue',
      'Return to the left',
      'Preventive simple',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 28,
    question: 'When an accident occurs and alone there are material damages, which is the corresponding procedure according to the regulation,',
    options: [
      'To expect the intervention of the authorities of highway Administration so that they testify the exchange of documents with the against part',
      'If drivers have all their documents in order, and agree to a signed waiver, the vehicles will not be seized',
      'To expect the intervention of the authorities of highway Administration to raise the inventory of the vehicle before they be carried it to yard',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 29,
    question: 'Under what conditions can you park in a space designated for the handicapped?',
    options: [
      'If you are transporting a disabled person and the vehicle bears the proper sticker',
      'If is the available only space in the parking',
      'If is stationed only for a few minutes',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 30,
    question: 'Is it permitted to park less than 5 meters from a side street?',
    options: [
      'It is not permitted under any circumstance',
      'Yes is permitted',
      'If is not painted of yellow color yes can be stationed',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 31,
    question: 'If a driver indicates he is turning left, using an arm signal, how should the arm be positioned?',
    options: [
      'Horizontal arm, forearm downward and hand extended with the palm backwards',
      'Arm, forearm and hand extended horizontally',
      'Arm horizontally, forearm up and hand with the fingers extended toward the right',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 32,
    question: 'What precautions are required by anyone leaving street parking, shopping center, garage, gas station, etc., according to the regulation?',
    options: [
      'To yield only to the pedestrians and to be incorporated quickly to the street because has the preference in transit',
      'Yield to pedestrians, and give circulating traffic the right of way',
      'To be incorporated to regular velocity without importing that oblige al conductive that is crossed to that brake unceremoniously since the regulation gives him the preference in transit',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 33,
    question: 'If you’re driving on a two-way street and need to turn left to enter another street, (if it’s permitted) who has preference in transit if there is no signal?',
    options: [
      'The conductors of the street that is going to cross',
      'The traffic on the street you wish to turn onto',
      'You that is going to rotate to the left',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 34,
    question: 'If you’re driving on a public highway and a patrol officer stops you, who should get out of their vehicle?',
    options: [
      'Only I with license and card of circulation',
      'The two we should descend us',
      'The patrol officer and he will approach the driver’s side of your vehicle, carrying helmet and clasp of identification',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 35,
    question: 'Is it prohibited for vehicles, other than those of emergency, to use turret lights, sirens, and other accessory reserved for emergency?',
    options: [
      'Yes',
      'Alone in federal highways',
      'False',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 36,
    question: 'What is the maximum speed allowed while driving in a school zone?',
    options: [
      '50 km/h',
      '15 km/h',
      '25 km/h',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 37,
    question: 'What is the maximum speed allowed on a city street where there is no speed limit posted?',
    options: [
      '40 km/h',
      '50 km/h',
      '60 km/h',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 38,
    question: 'When approaching an intersection, you see a traffic officer with his arms down, facing or with his back to the opposing traffic (as pictured). What is he indicating?',
    options: [
      'Continue',
      'Preventive',
      'High general',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 39,
    question: 'On a one-way street, vehicles must be parked',
    options: [
      'To the right, save espresso prohibition',
      'To the left, in any direction with respect to the circulatory current',
      'To the left in the direction of traffic, unless expressly prohibited, or while jump-starting a battery',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 40,
    question: 'Of what category are the signs in the colors black and yellow?',
    options: [
      'Informative of Destiny',
      'Preventive',
      'Restrictive',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 41,
    question: 'Under what conditions can the proceeds of a vehicle be siezed and the vehicle sent to a landfill?',
    options: [
      'When there is an accident with injuries, or damage to property belonging to the Municipality, State, or Confederacy, and one or more drivers are found in state of drunkenness',
      'When, as a consequence of a road accident, only material damages in individuals property real estate goods exist',
      'Only when they have not insurance in force them involved in a road accident',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 42,
    question: 'The vehicles that travel for the public highways of the state, that are not of public transportation, should have',
    options: [
      'Insurance policy with extensive cover',
      'Insurance policy to guarantee damages to third parties in its goods and its people by an insured sum of not less than 6000 days of minimum wage',
      'Insurance policy that guarantee damages to third parties in its goods and its people by when less 1000 days of minimum wage',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 43,
    question: 'According to the priority of traffic that is covered in the regulation of traffic, which are the measures of safety that should observed by a driver that arrives at a public square?',
    options: [
      'To be incorporated to the bower to low velocity and warning to the others conductive',
      'To be incorporated to the bower circulating to 40 km/h, touching previously the horn to call the attention and to avoid an accident',
      'Come to a total stop before mixing with the traffic, giving preference to the ones that already travel there',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 44,
    question: 'When you’re driving and come to an intersection with a flashing red light, what should you do?',
    options: [
      'To accelerate and to cross quickly the street',
      'Come to a full stop and continue after confirming it is safe to do so',
      'To slow down before entering the intersection and to continue with the necessary precautions',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 45,
    question: 'On a signal light, what is the purpose of the amber or yellow light?',
    options: [
      'The interim that exists to clear the intersection when some vehicle has entered or found it impossible to stop immediately, due to the risk of impact from the rear',
      'That you should enlarge the velocity to prevent an accident',
      'That you should utilize the horn and to advance',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 46,
    question: 'If on a street the signal indicates "continue" but a traffic officer indicates you "alto", which should you obey?',
    options: [
      'The traffic officer',
      'The signal',
      'To the others conductive',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 47,
    question: 'Which is the difference between the signs of restrictive traffic and the preventive?',
    options: [
      'Besides their colors, the restrictive signs indicate certain type of limitations or prohibitions with relation to the traffic and the use of the public highways, while the preventive notify the existence or the nature of some danger, or the change of situation in a public highway',
      'Does Not exist differentiates some',
      'The difference is its size and also that the Restrictive signs are of blue color with white and the preventive green with white',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 48,
    question: 'According to the regulation, they have priority in transit in primary highway administrations',
    options: [
      'The streets and worn',
      'The streets, roads and worn',
      'Avenues, worn, viaducts and road peers of first magnitude, on all the other arteries',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 49,
    question: 'What is a driver indicating when he uses this arm signal?',
    options: [
      'Stop',
      'Continue',
      'Return to the left',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 50,
    question: 'The officers of highway administration and traffic do signals with their whistle, what do they signify with two short blasts?',
    options: [
      'Continue',
      'Precaution',
      'Accelerate',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 51,
    question: 'When the garrisons or edges of the sidewalk are found painted a yellow color, what do they indicate?',
    options: [
      'That the place is reserved',
      'Exclusive for official vehicles',
      'That parking in that area is prohibited',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 52,
    question: 'What do two continuous lines on a roadway indicate?',
    options: [
      'Permits to surpass with precaution',
      'Pedestrian zone',
      'That passing is prohibited in either direction',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 53,
    question: 'What does this sign indicate?',
    options: [
      'Bridge',
      'Road narrows ahead',
      'Incorporation al traffic',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 54,
    question: 'What does this sign indicate?',
    options: [
      'Agricultural machinery is prohibited',
      'Is authorized to circulate with tractor',
      'Can circulate to low velocity',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 55,
    question: 'What does this sign indicate?',
    options: [
      'Continuous return',
      'Curve',
      'Inverse curve',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 56,
    question: 'When you arrive at an intersection marked “alto” on the pavement, where should you stop?',
    options: [
      'On the sign of "alto"',
      'Before the white line marked for "alto"',
      'In a place near the intersection provided that doing high total',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 57,
    question: 'What is indicated on a roadway with a solid line next to a broken line in the middle of the road?',
    options: [
      'Vehicles traveling on the side of the broken line are permitted to pass. Vehicles traveling on the side of the solid line are not permitted to pass',
      'Indicates the conductors the place where they should be stationed',
      'Are neutral areas',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 58,
    question: 'What does this sign indicate?',
    options: [
      'Weight restricted',
      'Height restricted',
      'Symmetrical narrowing',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 59,
    question: 'What does this sign indicate?',
    options: [
      'Right turn continue',
      'Inverse elbow',
      'Connection right winger',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 60,
    question: 'What does this sign indicate?',
    options: [
      'Deviation',
      'Narrow bridge',
      'Circulation al central',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 61,
    question: 'What do the continuous lines on the edge of the road indicate to us?',
    options: [
      'Delimit the space for the crosswalk',
      'They serve to separate rails',
      'They are boundary lines to indicate the safe driving area on the road',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 62,
    question: 'Which machanical device sends electrical power to the battery?',
    options: [
      'The alternator',
      'The forward lighthouses',
      'The reel',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 63,
    question: 'What can cause a motor to suffer overheating?',
    options: [
      'Lack of water or a loose fan belt',
      'Odometer in badly state',
      'Lack of oil in the differential',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 64,
    question: 'What does this sign indicate?',
    options: [
      'No parking',
      'Zone of parking',
      'Prohibited to continue forward',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 65,
    question: 'What does this sign indicate?',
    options: [
      'Asymmetric narrowing',
      'Circulation al central',
      'Width restricted',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 66,
    question: 'Which they are the basic tools that should bring in their vehicle?',
    options: [
      'Board, Hammer, Nails, Posh, Sandpapers, Knife, liquid Adhesive',
      'Cloths, Foci, Bands, Hoses, insulating Tape, Reel and I Liquidate for brakes',
      'Jumper cables, Lantern or flashlight, Jack, Lug wrench, Pliers, Cloths, Screwdrivers (phillips and flat), Pressure gauge for tires',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 67,
    question: 'What does this sign indicate?',
    options: [
      'No stopping',
      'Railroad crossing',
      'Crossing of roads',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 68,
    question: 'What does this sign indicate?',
    options: [
      'Railroad crossing',
      'Crossing of roads',
      'Not to stop',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 69,
    question: 'What does this sign indicate?',
    options: [
      'Bower',
      'Prohibited the return',
      'No U-turns',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 70,
    question: 'What does this sign indicate?',
    options: [
      'Yield you the step',
      'Yield',
      'The two have the step',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 71,
    question: 'What does this sign indicate?',
    options: [
      'Exit',
      'Connection right winger',
      'Incorporation of traffic',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 72,
    question: 'What does this sign indicate?',
    options: [
      'A single rail',
      'To circulate al central',
      'Width free',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 73,
    question: 'What safety measures should be taken if your vehicle suffers a mechanical failure while driving?',
    options: [
      'To light hazard lights, to seek which is the failure and to repair it quickly in the place',
      'Turn on hazard lights, move the vehicle to the far right so that traffic is not blocked and place a hazard sign out',
      'To light hazard lights and to expect in the place to that the aid of the mechanic arrive',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 74,
    question: 'The rearview mirrors should be observed each',
    options: [
      '1 to 2 minutes',
      '2 to 5 seconds',
      '30 to 40 seconds',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 75,
    question: 'Before operating your vehicle, it is best to check the',
    options: [
      'Rims, lights, card of circulation and license',
      'Softening, extinguisher and repair',
      'Oil, water, tires, lights, mirrors and gas',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 76,
    question: 'When a vehicle is passing you, what should you do?',
    options: [
      'To enlarge the velocity',
      'Slow down',
      'To activate intermittent',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 77,
    question: 'If, while driving your vehicle, one of the tires blows out or goes flat, what should you do?',
    options: [
      'To apply the pedal of the brakes to reduce the velocity',
      'Hold the steering wheel tightly, remove your foot from the accelerator, and allow the vehicle time to slow down before directing it to the right edge of the road',
      'Quickly to direct the vehicle al right side of the road',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 78,
    question: 'The most dangerous collision in an accident, considering similar speeds is',
    options: [
      'That of side',
      'By reach',
      'A front collision',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 79,
    question: 'What should be done if the hood of your vehicle comes up while you’re driving?',
    options: [
      'To brake quickly',
      'To be directed directly to the right',
      'Put your head out the window to observe your surroundings, slow the vehicle down, and edge to the right side of the road',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 80,
    question: 'What precautions should you take to avoid entering the pedestrian zone?',
    options: [
      'To accelerate to cross quickly the zone',
      'Slow down if the signal changes and stop before crossing the white line',
      'To brake after to have passed the pedestrian zone',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 81,
    question: 'It is frequent, while driving in the streets, to find a driver that follows too close, pressuring us whether with lights or horn. What should be our attitude toward this situation?',
    options: [
      'To accelerate to avoid that even',
      'Light the corresponding turn signal and change lanes carefully',
      'To continue handling for my rail and to leave that the other conductor surpass me',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 82,
    question: 'What safety measures should be taken when approaching an intersection in which the streets are of equal importance and there is no signal light or stop sign?',
    options: [
      'Remove your foot from the accelerator and place it on the brake. Come to a comfortable stop, look in all directions, and advance with care',
      'To observe toward the sides and to continue the march to the same velocity',
      'To accelerate so that they yield me since I arrived first',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 83,
    question: 'Some experts in road safety classify various types of drivers according to their dangerous attitude toward driving, the most common are',
    options: [
      'Happy, nice and kind',
      'Tranquil and careless',
      'Aggressive, Offensive, Defensive',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 84,
    question: 'When we are tired and we drive a vehicle, it is recommended for safety',
    options: [
      'To take two cups of well loaded coffee without sugar',
      'To slow down, to descend a little the crystal of the side of the conductor in such a way that permit air intake and to light the radio to high volume',
      'To stop and rest for at least 20 minutes and to do some physical exercises before continuing our trip',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 85,
    question: 'Which are the potentially adverse conditions in driving?',
    options: [
      'The time, the traffic, the vehicle, the road, and the lighting',
      'To conduct with precaution, to Respect the pedestrian zones, to conduct in its five senses',
      'A responsible conductor, a pedestrian precavido and an attentive passenger',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 86,
    question: 'Which is the best way to take a curve?',
    options: [
      'Before entering, slow down and then accelerate gradually inside the curve',
      'To slow down inside the curve',
      'To take with smoothness the steering wheel and to continue with the normal velocity',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 87,
    question: 'What should be done if a fire begins in your vehicle?',
    options: [
      'To call the firemen and to ask aid to the passers-by',
      'To open the doors and to throw him water to put out',
      'Put out the fire with the fire extinguisher in the car',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 88,
    question: 'For safety, how should we proceed if the road we are traveling on is wet?',
    options: [
      'We should slow down and increase the distance between us and the vehicles in front of us',
      'We can maintain our normal velocity if are in good condition the brakes and the rims',
      'We should slow down only in the surrounding area of the cruisers',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 89,
    question: 'There are people that drive their vehicles in a dangerous and inadequate manner, what should you do if you find yourself on the road with some of them?',
    options: [
      'Keep the calm, yield a little, move away from them, and think that your safety is more important',
      'To give them reach to indicate them the errors that go committing al to conduct',
      'To be located in the same rail to some 7 meters ahead or behind and to commit the same errors so that the other conductor learn',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 90,
    question: 'What should be done if you arrive at an intersection and the light has turned amber?',
    options: [
      'To brake quickly for be not passed the high one',
      'Slow down, braking moderately, to avoid an accident with the other vehicles',
      'To sound three times the horn so that the conductor that him continues he listen him',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 91,
    question: 'Which is the behavior of a professional driver while on, or before entering a congested road?',
    options: [
      'Circulates among the vehicles taking advantage of the spaces, trying to have few road incidents',
      'Touches the horn insistently and changes of rail at a bad time',
      'Wait patiently with his signal indicator on. They are not despaired and seek an alternate way',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 92,
    question: 'When are the tires on a vehicle considered not safe?',
    options: [
      'When the tread of the tires is less than 1mm in depth',
      'When the drawing of the rims is very deep',
      'When the rims are hot by the sun and we travel to 80 km/h',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 93,
    question: 'What should be done if you’re driving and the right front tire leaves the pavement?',
    options: [
      'To apply immediately the brakes and to return al pavement',
      'Hold the steering wheel firmly, remove your foot from the accelerator, and return to the pavement carefully',
      'To return quickly al pavement to its normal velocity',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 94,
    question: 'What is the understanding of defensive management?',
    options: [
      'To conduct to very low velocity',
      'Drive a vehicle, respecting the norms of highway administration to prevent accidents, in spite of the errors of others',
      'To conduct to low velocity in spite of the delays in the schedules',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 95,
    question: 'If you approach an intersection and the color of the light of the signal cannot be seen clearly, due to the sun light, what measures of safety should be taken?',
    options: [
      'To yield to the vehicles that travel from East to West and to expect my shift to cross',
      'Slow down and observe the movement of traffic at the signal. If it corresponds to the direction you’re traveling, proceed with caution',
      'To pass the faster than be able, avoiding to collide with the other vehicles',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 96,
    question: 'What are the advantages of checking tires, belts, lights, and levels of fluids with the frequency recommended by the manufacturer?',
    options: [
      'To avoid the accidents with pedestrian',
      'To avoid unexpected overheating and damage to the motor, as well as road accidents',
      'Road conflicts they are prevented and conductors rolled',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 97,
    question: 'Which are the obligations of a responsible driver?',
    options: [
      'Respect the rights and obligations of the other users of the public highways, as well as the Traffic signs and indications of the Traffic Officers',
      'To conduct with precaution, exceeding the alone velocity when need to do it',
      'To avoid accidents al to conduct, respecting the road fixing unless by personal need require not to respect the ones that consider less important',
    ],
    correctOptionNumber: 0,
  },
  {
    id: 98,
    question: 'Of the following options which is the best way to change a flat tire?',
    options: [
      'To station the vehicle in a flat surface, to assure the rims with a block of wood and to change the rim as better be able',
      'Ensure that the vehicle does not hinder other drivers, apply the parking brake, secure the wheels with a block of wood before applying the jack. Loosen the lug nuts slightly, then raise the jack to an elevation of approximately 3 cm. Change the tire and tighten the lug nuts moderately, descend the jack and tighten the nuts firmly, then remove blocks of wood',
      'To rise the vehicle preferably to the stool to place the cat in any point of the vehicle and to rise it it more high possible then to loosen the nuts stopping the rim with the feet to avoid that of returns, to change the rim, to remove cat and to circulate with security',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 99,
    question: 'If we get in our vehicle and see the windshield is dirty, it is recommendable:',
    options: [
      'To circulate to high speed to clean it and thus we will conduct surer',
      'To clean it with running water and a little soap',
      'To utilize the windshield wipers in dry since we avoid that mud with the land be done or the dust',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 100,
    question: 'Is it necessary to adjust the rearview mirrors of the vehicle to our height if we are going to drive only 1 km?',
    options: [
      'Is not necessary in short sections',
      'Really is not important',
      'Yes it is necessary for safety, without regard to the distance',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 101,
    question: 'If we approach an intersection and the signal cannot be seen clearly, because signs, trees or other objects are impeding our vision, it is recommended for safety to do the following thing',
    options: [
      'To accelerate and to touch the horn so that the other conductors yield me',
      'To stop accelerating and to pass slowly',
      'Diminish speed, and proceed with caution, trying to see the signal more clearly and observe the surrounding traffic, avoiding any problem',
    ],
    correctOptionNumber: 2,
  },
  {
    id: 102,
    question: 'To drive during the night in conditions of optimal climate',
    options: [
      'We can distinguish a pedestrian with dark clothes to 100 meters of distance',
      'It is difficult to see the pedestrians at more than 20 meters, therefore you should use maximum caution when driving by urban zones and/or where there is concentrations of pedestrians',
      'We can see a pedestrian dressed with yellow clothes since a distance of 80 m',
    ],
    correctOptionNumber: 1,
  },
  {
    id: 103,
    question: 'The to use of earphones to listen to music while driving is',
    options: [
      'Dangerous only for whom them uses',
      'Dangerous only for the pedestrians',
      'Dangerous for all the road users close to the one using them',
    ],
    correctOptionNumber: 2,
  },
];

export default data;
