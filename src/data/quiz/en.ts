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
    correct_option: 'License plates are expired',
  },
  {
    id: 2,
    question: 'If you and your passengers wear seat belts',
    options: [
      'The possibility of wounds and/or death is diminished in case of accidents and a fine is avoided',
      'Have more risks in case of accident by be not able to leave quickly of the vehicle',
      'The corresponding fine is avoided only in federal highways',
    ],
    correct_option: 'The possibility of wounds and/or death is diminished in case of accidents and a fine is avoided',
  },
  {
    id: 3,
    question: 'According to the law, the first offence of driving a vehicle in the third degree of drunkenness will result in',
    options: [
      'Final cancellation of its license, besides the corresponding fines',
      'Suspension of license for fifteen days, besides the corresponding fines',
      'Arrest for 36 hours and the corresponding fines',
    ],
    correct_option: 'Arrest for 36 hours and the corresponding fines',
  },
  {
    id: 4,
    question: 'If you pay a ticket within 5 work days you will receive',
    options: [
      'A 75% discount',
      'A 50% discount',
      'A 25% discount',
    ],
    correct_option: 'A 50% discount',
  },
  {
    id: 5,
    question: 'The law of traffic prohibits the use of tint or other elements that completely impede visibility toward the interior of the vehicle',
    options: [
      'True',
      'False',
      'Only on public transportation',
    ],
    correct_option: 'True',
  },
  {
    id: 6,
    question: 'According to the law of the services of highway administration, traffic and transportation, how many people are permitted to be transported in "pick up"',
    options: [
      'Only the number of people that include the team of adequate protection',
      'The ones that go seated',
      'Only those specified in the card of circulation',
    ],
    correct_option: 'Only those specified in the card of circulation',
  },
  {
    id: 7,
    question: 'The responsibility of police services of highway administration, traffic and transportation of the state of jalisco and their regulation is',
    options: [
      'To send off licenses to conduct',
      'Infraccionar to the conductive evils',
      'To govern the traffic in the public highways of the State of Jalisco, open to the circulation, that is not of federal jurisdiction',
    ],
    correct_option: 'To govern the traffic in the public highways of the State of Jalisco, open to the circulation, that is not of federal jurisdiction',
  },
  {
    id: 8,
    question: 'If driving a vehicle to a speed of 71 km/h and the posted speed is 60 km/h as maximum limit of speed, violater is subject to',
    options: [
      'Fines',
      'Detention of the vehicle',
      'Suspension of the license',
    ],
    correct_option: 'Fines',
  },
  {
    id: 9,
    question: 'It is an infraction to the law of traffic',
    options: [
      'To circulate by the far right',
      'To drive a vehicle with its windshield damaged in such a way that it interferes with the visibility',
      'To turn over the right with signal in red with precaution, prior high total and offering preference al pedestrian',
    ],
    correct_option: 'To drive a vehicle with its windshield damaged in such a way that it interferes with the visibility',
  },
  {
    id: 10,
    question: 'Which is the maximum distance permitted to drive in reverse?',
    options: [
      '10 meters',
      '25 meters',
      '50 meters',
    ],
    correct_option: '10 meters',
  },
  {
    id: 11,
    question: 'A police officer can stop a vehicle for the purpose of verifying that the driver has the necessary documents for driving',
    options: [
      'True',
      'Yes, when carry plates of another state',
      'False',
    ],
    correct_option: 'False',
  },
  {
    id: 12,
    question: 'If a vehicle is found to have no registration, current plates, hologram, or the driver has no license, it is required',
    options: [
      'To expect the annual exchange',
      'To conclude operation of the vehicle while obtaining the necessarydocument(s)',
      'To travel with permission to circulate indefinitely',
    ],
    correct_option: 'To conclude operation of the vehicle while obtaining the necessarydocument(s)',
  },
  {
    id: 13,
    question: 'Is it motive for a fine if your vehicle has no windshield wipers?',
    options: [
      'True, because the law of traffic requires it',
      'Only for the public vehicles',
      'Only in epoch of rains, in case of emergency or in official vehicles',
    ],
    correct_option: 'True, because the law of traffic requires it',
  },
  {
    id: 14,
    question: 'If you drive a motor vehicle in a state of drunkenness or under the influence of narcotics or psychotropic, you are committing',
    options: [
      'Infraction and crime',
      'Abuse of authority',
      'An infraction and administrative lack',
    ],
    correct_option: 'An infraction and administrative lack',
  },
  {
    id: 15,
    question: 'It is considered an infaction',
    options: [
      'To drive with total, or partly hidden plates',
      'To circulate with plates of another state',
      'To circulate with the holograms of previous years',
    ],
    correct_option: 'To drive with total, or partly hidden plates',
  },
  {
    id: 16,
    question: 'It is prohibited to drive a motor vehicle, in the state of jalisco, while using a cellular telephone',
    options: [
      'Yes',
      'No',
      'Unless hands-free accessories are being used',
    ],
    correct_option: 'Unless hands-free accessories are being used',
  },
  {
    id: 17,
    question: 'In the state of jalisco, it is permitted to transport a child less than three years old in the front seat',
    options: [
      'Only when go in arms of an adult on',
      'Only when an adult, carrying placed the seat belt, hold it with the arms',
      'Only in the vehicles that have no rear seats, and they must be secured in a car seat',
    ],
    correct_option: 'Only in the vehicles that have no rear seats, and they must be secured in a car seat',
  },
  {
    id: 18,
    question: 'It is 12:00 at night and, while driving your vehicle, you arrive at a signal light that has turned red. there is no one else at the crossing and there is no danger to you, other vehicles, or pedestrians. are you obliged to wait for the green light before advancing?',
    options: [
      'Yes, I am obliged to respect the signal without regard to the hour of the day',
      'Not, nobody is observing me, so I can pass me the red light of the signal',
      'Not, the Law of highway Administration offers me the benefit to pass me the red lights after the 12:00 at night',
    ],
    correct_option: 'Yes, I am obliged to respect the signal without regard to the hour of the day',
  },
  {
    id: 19,
    question: 'When an emergency vehicle is in service, with lights and siren, what should be done?',
    options: [
      'To Descend the velocity',
      'To Accelerate and to pass first',
      'Permit him the right-of-way, by pulling to the extreme right of the highway and stop',
    ],
    correct_option: 'Permit him the right-of-way, by pulling to the extreme right of the highway and stop',
  },
  {
    id: 20,
    question: 'If you arrive at an intersection, with traffic being controlled by a police officer, what is he indicating if he is facing you or has his back to you with his arms downward?',
    options: [
      'Continue',
      'Preventive',
      'Stop',
    ],
    correct_option: 'Stop',
  },
  {
    id: 21,
    question: 'To drive a vehicle designed for the transportation of load, who’s capacity of load does not exceed three thousand five hundred kilograms, or cars of public utility, it is required to have a license of',
    options: [
      'Motorist',
      'Chauffeur',
      'Conductive of Services of Public Transportation',
    ],
    correct_option: 'Chauffeur',
  },
  {
    id: 22,
    question: 'It is permitted the return to the left with the light of the signal in red?',
    options: [
      'Yes, as long as they come and enter a one-way street traffic, prior to the light turning red, while respecting the pedestrian crossing priority, without any indication that forbid and which is not public service vehicle collective passengers',
      'No, because the law and regulation of traffic only permit it to the right',
      'Yes, whenever an Avenue stem from or Worn with double sense of circulation, enter to a street of a single sense, prior high total, respecting the prelación in transit of the pedestrian, and that be not vehicle of collective service public of passengers',
    ],
    correct_option: 'Yes, as long as they come and enter a one-way street traffic, prior to the light turning red, while respecting the pedestrian crossing priority, without any indication that forbid and which is not public service vehicle collective passengers',
  },
  {
    id: 23,
    question: 'The plates, the gummed and the card of circulation are documents',
    options: [
      'Not transferable that identify al vehicle',
      'Necessary to perform the I endorse',
      'That are required for the obtaining of the license',
    ],
    correct_option: 'Not transferable that identify al vehicle',
  },
  {
    id: 24,
    question: 'When approaching a school patrol and they indicate to stop and yield to students, we are obliged to stop?',
    options: [
      'Yes we are obliged',
      'Not, because are not Authorities of highway Administration',
      'Only when a road agent accompanies them',
    ],
    correct_option: 'Yes we are obliged',
  },
  {
    id: 25,
    question: 'Which are the vehicles that have priority in transit?',
    options: [
      'Vehicles of emergency in service with lights and siren',
      'Official vehicles of the City Hall and federal police',
      'Values transfer vehicles',
    ],
    correct_option: 'Vehicles of emergency in service with lights and siren',
  },
  {
    id: 26,
    question: 'At an intersection, having no priority to the flow of traffic in any direction, what does the traffic regulation require you to do?',
    options: [
      'Come to a total stop and yield to vehicle on your right',
      'To continue advancing to constant velocity if the street is of north to south',
      'To slow down al to approach me al, cruiser without doing high total, to cross faster',
    ],
    correct_option: 'To continue advancing to constant velocity if the street is of north to south',
  },
  {
    id: 27,
    question: 'When the traffic officer is in a preventive position, advancing the arms slightly and fanning the hands in a steet of four lanes, what is he indicating?',
    options: [
      'Continue',
      'Return to the left',
      'Preventive simple',
    ],
    correct_option: 'Return to the left',
  },
  {
    id: 28,
    question: 'When an accident occurs and alone there are material damages, which is the corresponding procedure according to the regulation',
    options: [
      'To expect the intervention of the authorities of highway Administration so that they testify the exchange of documents with the against part',
      'If drivers have all their documents in order, and agree to a signed waiver, the vehicles will not be seized',
      'To expect the intervention of the authorities of highway Administration to raise the inventory of the vehicle before they be carried it al yard',
    ],
    correct_option: 'If drivers have all their documents in order, and agree to a signed waiver, the vehicles will not be seized',
  },
  {
    id: 29,
    question: 'Under what conditions can you park in a space designated for the handicapped?',
    options: [
      'If you are transporting a disabled person and the vehicle bears the proper sticker ',
      'If is the available only space in the parking',
      'If is stationed only for a few minutes',
    ],
    correct_option: 'If you are transporting a disabled person and the vehicle bears the proper sticker ',
  },
  {
    id: 30,
    question: 'Is it permitted to park less than 5 meters from a side street?',
    options: [
      'It is not permitted under any circumstance',
      'Yes is permitted',
      'If is not painted of yellow color yes can be stationed',
    ],
    correct_option: 'It is not permitted under any circumstance',
  },
  {
    id: 31,
    question: 'If a driver indicates he is turning left, using an arm signal, how should the arm be positioned?',
    options: [
      'Horizontal arm, forearm downward and hand extended with the palm backwards',
      'Arm, forearm and hand extended horizontally',
      'Arm horizontally, forearm up and hand with the fingers extended toward the right',
    ],
    correct_option: 'Arm, forearm and hand extended horizontally',
  },
  {
    id: 32,
    question: 'What precautions are required by anyone leaving street parking, shopping center, garage, gas station, etc., according to the regulation?',
    options: [
      'To yield only to the pedestrians and to be incorporated quickly to the street because has the preference in transit',
      'Yield to pedestrians, and give circulating traffic the right of way',
      'To be incorporated to regular velocity without importing that oblige al conductive that is crossed to that brake unceremoniously since the regulation gives him the preference in transit',
    ],
    correct_option: 'Yield to pedestrians, and give circulating traffic the right of way',
  },
  {
    id: 33,
    question: 'If you’re driving on a two-way street and need to turn left to enter another street, (if it’s permitted) who has preference in transit if there is no signal?',
    options: [
      'The conductors of the street that is going to cross',
      'The traffic on the street you wish to turn onto',
      'You that is going to rotate to the left',
    ],
    correct_option: 'The traffic on the street you wish to turn onto',
  },
  {
    id: 34,
    question: 'If you’re driving on a public highway and a patrol officer stops you, who should get out of their vehicle?',
    options: [
      'Only I with license and card of circulation',
      'The two we should descend us',
      'The patrol officer and he will approach the driver’s side of your vehicle, carrying helmet and clasp of identification',
    ],
    correct_option: 'The patrol officer and he will approach the driver’s side of your vehicle, carrying helmet and clasp of identification',
  },
  {
    id: 35,
    question: 'Is it prohibited for vehicles, other than those of emergency, to use turret lights, sirens, and other accessory reserved for emergency?',
    options: [
      'Yes',
      'Alone in federal highways',
      'False',
    ],
    correct_option: 'Yes',
  },
  {
    id: 36,
    question: 'What is the maximum speed allowed while driving in a school zone?',
    options: [
      '50 km/h',
      '15 km/h',
      '25 km/h',
    ],
    correct_option: '25 km/h',
  },
  {
    id: 37,
    question: 'What is the maximum speed allowed on a city street where there is no speed limt posted?',
    options: [
      '40 km/h',
      '50 km/h',
      '60 km/h',
    ],
    correct_option: '50 km/h',
  },
  {
    id: 38,
    question: 'When approaching an intersection, you see a traffic officer with his arms down, facing or with his back to the opposing traffic (as pictured). what is he indicating?',
    options: [
      'Continu',
      'Preventive',
      'High general',
    ],
    correct_option: 'Continu',
  },
  {
    id: 39,
    question: 'On a one-way street, vehicles must be parked',
    options: [
      'To the right, save espresso prohibition',
      'To the left, in any direction with respect to the circulatory current',
      'To the left in the direction of traffic, unless expressly prohibited, or while jump-starting a battery',
    ],
    correct_option: 'To the left in the direction of traffic, unless expressly prohibited, or while jump-starting a battery',
  },
  {
    id: 40,
    question: 'Of what category are the signs in the colors black and yellow?',
    options: [
      'Informative of Destiny',
      'Preventive',
      'Restrictive',
    ],
    correct_option: 'Preventive',
  },
  {
    id: 41,
    question: 'Under what conditions can the proceeds of a vehicle be siezed and the vehicle sent to a landfill?',
    options: [
      'When there is an accident with injuries, or damage to property belonging to the Municipality, State, or Confederacy, and one or more drivers are found in state of drunkenness',
      'When, as a consequence of a road accident, only material damages in individuals property real estate goods exist',
      'Only when they have not insurance in force them involved in a road accident',
    ],
    correct_option: 'When there is an accident with injuries, or damage to property belonging to the Municipality, State, or Confederacy, and one or more drivers are found in state of drunkenness',
  },
  {
    id: 42,
    question: 'The vehicles that travel for the public highways of the state, that are not of public transportation, should have',
    options: [
      'Insurance policy with extensive cover',
      'Insurance policy to guarantee damages to third parties in its goods and its people by an insured sum of not less than 6000 days of minimum wage',
      'Insurance policy that guarantee damages to third parties in its goods and its people by when less 1000 days of minimum wage',
    ],
    correct_option: 'Insurance policy to guarantee damages to third parties in its goods and its people by an insured sum of not less than 6000 days of minimum wage',
  },
  {
    id: 43,
    question: 'According to the priority of traffic that is covered in the regulation of traffic, which are the measures of safety that should observed by a driver that arrives at a public square?',
    options: [
      'To be incorporated to the bower to low velocity and warning to the others conductive',
      'To be incorporated to the bower circulating to 40 km/h, touching previously the horn to call the attention and to avoid an accident',
      'Come to a total stop before mixing with the traffic, giving preference to the ones that already travel there',
    ],
    correct_option: 'Come to a total stop before mixing with the traffic, giving preference to the ones that already travel there',
  },
  {
    id: 44,
    question: 'When you’re driving and come to an intersection with a flashing red light, what should you do?',
    options: [
      'To accelerate and to cross quickly the street',
      'Come to a full stop and continue after confirming it is safe to do so',
      'To slow down before entering the intersection and to continue with the necessary precautions',
    ],
    correct_option: 'Come to a full stop and continue after confirming it is safe to do so',
  },
  {
    id: 45,
    question: 'On a signal light, what is the purpose of the amber or yellow light?',
    options: [
      'The interim that exists to clear the intersection when some vehicle has entered or found it impossible to stop immediately, due to the risk of impact from the rear',
      'That you should enlarge the velocity to prevent an accident',
      'That you should utilize the horn and to advance',
    ],
    correct_option: 'The interim that exists to clear the intersection when some vehicle has entered or found it impossible to stop immediately, due to the risk of impact from the rear',
  },
  {
    id: 46,
    question: 'If on a street the signal indicates "continue" but a traffic officer indicates you "alto", which should you obey?',
    options: [
      'The traffic officer',
      'The signal',
      'To the others conductive',
    ],
    correct_option: 'The traffic officer',
  },
  {
    id: 47,
    question: 'Which is the difference between the signs of restrictive traffic and the preventive?',
    options: [
      'Besides their colors, the restrictive signs indicate certain type of limitations or prohibitions with relation to the traffic and the use of the public highways, while the preventive notify the existence or the nature of some danger, or the change of situation in a public highway',
      'Does Not exist differentiates some',
      'The difference is its size and also that the Restrictive signs are of blue color with white and the preventive green with white',
    ],
    correct_option: 'Besides their colors, the restrictive signs indicate certain type of limitations or prohibitions with relation to the traffic and the use of the public highways, while the preventive notify the existence or the nature of some danger, or the change of situation in a public highway',
  },
  {
    id: 48,
    question: ' according to the regulation, they have priority in transit in primary highway administrations',
    options: [
      'The streets and worn',
      'The streets, roads and worn',
      'Avenues, worn, viaducts and road peers of first magnitude, on all the other arteries',
    ],
    correct_option: 'Avenues, worn, viaducts and road peers of first magnitude, on all the other arteries',
  },
  {
    id: 49,
    question: 'What is a driver indicating when he uses this arm signal?',
    options: [
      'Stop',
      'Continue',
      'Return to the left',
    ],
    correct_option: 'Stop',
  },
  {
    id: 50,
    question: 'The officers of highway administration and traffic do signals with their whistle, what do they signify with two short blasts?',
    options: [
      'Continue',
      'Precaution',
      'Accelerate',
    ],
    correct_option: 'Continue',
  },
  {
    id: 51,
    question: 'When the garrisons or edges of the sidewalk are found painted a yellow color, what do they indicate?',
    options: [
      'That the place is reserved',
      'Exclusive for official vehicles',
      'That parking in that area is prohibited',
    ],
    correct_option: 'That parking in that area is prohibited',
  },
  {
    id: 52,
    question: 'What do two continuous lines on a roadway indicate?',
    options: [
      'Permits to surpass with precaution',
      'pedestrian Zone',
      'That passing is prohibited in either direction',
    ],
    correct_option: 'That passing is prohibited in either direction',
  },
  {
    id: 53,
    question: 'What does this sign indicate?',
    options: [
      'Bridge',
      'Road narrows ahead',
      'Incorporation al traffic',
    ],
    correct_option: 'Road narrows ahead',
  },
  {
    id: 54,
    question: 'What does this sign indicate?',
    options: [
      'Agricultural machinery is prohibited',
      'is authorized to circulate with tractor',
      'can circulate to low velocit',
    ],
    correct_option: 'Agricultural machinery is prohibited',
  },
  {
    id: 55,
    question: 'What does this sign indicate?',
    options: [
      'Continuous return',
      'Curve',
      'Inverse curve',
    ],
    correct_option: 'Curve',
  },
  {
    id: 56,
    question: 'When you arrive at an intersection marked “alto” on the pavement, where should you stop?',
    options: [
      'On the sign of "alto"',
      'Before the white line marked for "alto"',
      'In a place near the intersection provided that doing high total',
    ],
    correct_option: 'Before the white line marked for "alto"',
  },
  {
    id: 57,
    question: 'What is indicated on a roadway with a solid line next to a broken line in the middle of the road?',
    options: [
      'Vehicles traveling on the side of the broken line are permitted to pass. Vehicles traveling on the side of the solid line are not permitted to pass',
      'Indicates the conductors the place where they should be stationed',
      'Are neutral areas',
    ],
    correct_option: 'Vehicles traveling on the side of the broken line are permitted to pass. Vehicles traveling on the side of the solid line are not permitted to pass',
  },
  {
    id: 58,
    question: 'What does this sign indicate?',
    options: [
      'Weight restricted',
      'Height restricted',
      'symmetrical Narrowin',
    ],
    correct_option: 'Height restricted',
  },
  {
    id: 59,
    question: 'What does this sign indicate?',
    options: [
      'Right turn continue',
      'inverse Elbow',
      'Connection right winger',
    ],
    correct_option: 'Right turn continue',
  },
  {
    id: 60,
    question: 'What does this sign indicate?',
    options: [
      'Deviation',
      'Narrow bridge',
      'Circulation al central',
    ],
    correct_option: 'Narrow bridge',
  },
  {
    id: 61,
    question: 'What do the continuous lines on the edge of the road indicate to us?',
    options: [
      'Delimit the space for the crosswalk',
      'They serve to separate rails',
      'They are boundary lines to indicate the safe driving area on the road',
    ],
    correct_option: 'They are boundary lines to indicate the safe driving area on the road',
  },
  {
    id: 62,
    question: 'Which machanical device sends electrical power to the battery?',
    options: [
      'The alternator',
      'The forward lighthouses',
      'The reel',
    ],
    correct_option: 'The alternator',
  },
  {
    id: 63,
    question: 'What can cause a motor to suffer overheating?',
    options: [
      'Lack of water or a loose fan belt',
      'Odometer in badly state',
      'Lack of oil in the differential',
    ],
    correct_option: 'Lack of water or a loose fan belt',
  },
  {
    id: 64,
    question: 'What does this sign indicate?',
    options: [
      'No parking',
      'Zone of parking',
      'Prohibited to continue forward',
    ],
    correct_option: 'No parking',
  },
  {
    id: 65,
    question: 'What does this sign indicate?',
    options: [
      'Asymmetric narrowing',
      'Circulation al central',
      'Width restricted',
    ],
    correct_option: 'Width restricted',
  },
  {
    id: 66,
    question: 'Which they are the basic tools that should bring in their vehicle?',
    options: [
      'Board, Hammer, Nails, Posh, Sandpapers, Knife, liquid Adhesive',
      'Cloths, Foci, Bands, Hoses, insulating Tape, Reel and I Liquidate for brakes',
      'Jumper cables, Lantern or flashlight, Jack, Lug wrench, Pliers, Cloths, Screwdrivers (phillips and flat), Pressure gauge for tires',
    ],
    correct_option: 'Jumper cables, Lantern or flashlight, Jack, Lug wrench, Pliers, Cloths, Screwdrivers (phillips and flat), Pressure gauge for tires',
  },
  {
    id: 67,
    question: 'What does this sign indicate?',
    options: [
      'No stopping',
      'railroad Crossing',
      'Crossing of roads',
    ],
    correct_option: 'No stopping',
  },
  {
    id: 68,
    question: 'What does this sign indicate?',
    options: [
      'Railroad crossing',
      'Crossing of roads',
      'Not to stop',
    ],
    correct_option: 'Crossing of roads',
  },
  {
    id: 69,
    question: 'What does this sign indicate?',
    options: [
      'Bower',
      'Prohibited the return',
      'No U-turns',
    ],
    correct_option: 'No U-turns',
  },
  {
    id: 70,
    question: 'What does this sign indicate?',
    options: [
      'Yield you the step',
      'Yield',
      'The two have the step',
    ],
    correct_option: 'Yield',
  },
  {
    id: 71,
    question: 'What does this sign indicate?',
    options: [
      'Exit',
      'Connection right winger',
      'Incorporation of traffic',
    ],
    correct_option: 'Exit',
  },
  {
    id: 72,
    question: 'What does this sign indicate?',
    options: [
      'A single rail',
      'To circulate al central',
      'Width free',
    ],
    correct_option: 'Width free',
  },
  {
    id: 73,
    question: 'What safety measures should be taken if your vehicle suffers a mechanical failure while driving?',
    options: [
      'To light hazard lights, to seek which is the failure and to repair it quickly in the place',
      'Turn on hazard lights, move the vehicle to the far right so that traffic is not blocked and place a hazard sign out',
      'To light hazard lights and to expect in the place to that the aid of the mechanic arrive',
    ],
    correct_option: 'Turn on hazard lights, move the vehicle to the far right so that traffic is not blocked and place a hazard sign out',
  },
  {
    id: 74,
    question: 'The rearview mirrors should be observed each',
    options: [
      '1 to 2 minutes',
      '2 to 5 seconds',
      '30 to 40 seconds',
    ],
    correct_option: '2 to 5 seconds',
  },
  {
    id: 75,
    question: 'Before operating your vehicle, it is best to check the',
    options: [
      'Rims, lights, card of circulation and license',
      'Softening, extinguisher and repair',
      'Oil, water, tires, lights, mirrors and gas',
    ],
    correct_option: 'Oil, water, tires, lights, mirrors and gas',
  },
  {
    id: 76,
    question: 'When a vehicle is passing you, what should you do?',
    options: [
      'To enlarge the velocity',
      'Slow down',
      'To activate intermittent',
    ],
    correct_option: 'Slow down',
  },
  {
    id: 77,
    question: 'If, while driving your vehicle, one of the tires blows out or goes flat, what should you do?',
    options: [
      'To apply the pedal of the brakes to reduce the velocity',
      'Hold the steering wheel tightly, remove your foot from the accelerator, and allow the vehicle timeto slow down before directing it to the right edge of the road',
      'Quickly to direct the vehicle al right side of the road',
    ],
    correct_option: 'Hold the steering wheel tightly, remove your foot from the accelerator, and allow the vehicle timeto slow down before directing it to the right edge of the road',
  },
  {
    id: 78,
    question: 'The most dangerous collision in an accident, considering similar speeds is',
    options: [
      'That of side',
      'By reach',
      'A front collision',
    ],
    correct_option: 'A front collision',
  },
  {
    id: 79,
    question: 'What should be done if the hood of your vehicle comes up while you’redriving?',
    options: [
      'To brake quickly',
      'To be directed directly to the right',
      'Put your head out the window to observe your surroundings, slow the vehicle down, and edge to the right side of the road',
    ],
    correct_option: 'Put your head out the window to observe your surroundings, slow the vehicle down, and edge to the right side of the road',
  },
  {
    id: 80,
    question: 'What precautions should you take to avoid entering the pedestrian zone?',
    options: [
      'To accelerate to cross quickly the zone',
      'Slow down if the signal changes and stop before crossing the white line',
      'To brake after to have passed the pedestrian zone',
    ],
    correct_option: 'Slow down if the signal changes and stop before crossing the white line',
  },
  {
    id: 81,
    question: 'It is frequent, while driving in the streets, to find a driver that follows too close, pressuring us whether with lights or horn. what should be our attitude toward this situation?',
    options: [
      'To accelerate to avoid that even',
      'Light the corresponding turn signal and change lanes carefully',
      'To continue handling for my rail and to leave that the other conductor surpass me',
    ],
    correct_option: 'Light the corresponding turn signal and change lanes carefully',
  },
  {
    id: 82,
    question: 'What safety measures should be taken when approaching an intersection in which the streets are of equal importance and there is no signal light or stop sign?',
    options: [
      'Remove your foot from the accelerator and place it on the brake. Come to a comfortable stop, look in all directions, and advance with care',
      'To observe toward the sides and to continue the march to the same velocity',
      'To accelerate so that they yield me since I arrived first',
    ],
    correct_option: 'Remove your foot from the accelerator and place it on the brake. Come to a comfortable stop, look in all directions, and advance with care',
  },
  {
    id: 83,
    question: 'Some experts in road safety classify various types of drivers according to their dangerous attitude toward driving, the most common are',
    options: [
      'Happy, nice and kind',
      'Tranquil and careless',
      'Aggressive, Offensive, Defensive',
    ],
    correct_option: 'Aggressive, Offensive, Defensive',
  },
  {
    id: 84,
    question: 'When we are tired and we drive a vehicle, it is recommended for safety',
    options: [
      'To take two cups of well loaded coffee without sugar',
      'To slow down, to descend a little the crystal of the side of the conductor in such a way that permit air intake and to light the radio to high volume',
      'To stop and rest for at least 20 minutes and to do some physical exercises before continuing our trip',
    ],
    correct_option: 'To stop and rest for at least 20 minutes and to do some physical exercises before continuing our trip',
  },
  {
    id: 85,
    question: 'Which are the potentially adverse conditions in driving?',
    options: [
      'The time, the traffic, the vehicle, the road, and the lighting',
      'To conduct with precaution, to Respect the pedestrian zones, to conduct in its five senses',
      'A responsible conductor, a pedestrian precavido and an attentive passenger',
    ],
    correct_option: 'The time, the traffic, the vehicle, the road, and the lighting',
  },
  {
    id: 86,
    question: 'Which is the best way to take a curve?',
    options: [
      'Before entering, slow down and then accelerate gradually inside the curve',
      'To slow down inside the curve',
      'To take with smoothness the steering wheel and to continue with the normal velocity',
    ],
    correct_option: 'Before entering, slow down and then accelerate gradually inside the curve',
  },
  {
    id: 87,
    question: 'What should be done if a fire begins in your vehicle?',
    options: [
      'To call the firemen and to ask aid to the passers-by',
      'To open the doors and to throw him water to put out',
      'Put out the fire with the fire extinguisher in the car',
    ],
    correct_option: 'Put out the fire with the fire extinguisher in the car',
  },
  {
    id: 88,
    question: 'For safety, how should we proceed if the road we are traveling on is wet?',
    options: [
      'We should slow down and increase the distance between us and the vehicles in front of us',
      'we can maintain our normal velocity if are in good condition the brakes and the rims',
      'we should slow down only in the surrounding area of the cruisers',
    ],
    correct_option: 'We should slow down and increase the distance between us and the vehicles in front of us',
  },
  {
    id: 89,
    question: 'There are people that drive their vehicles in a dangerous and inadequate manner, what should you do if you find yourself on the road with some of them?',
    options: [
      'Keep the calm, yield a little, move away from them, and think that your safety is more important',
      'To give them reach to indicate them the errors that go committing al to conduct',
      'To be Located in the same rail to some 7 meters ahead or behind and to commit the same errors so that the other conductor learn',
    ],
    correct_option: 'Keep the calm, yield a little, move away from them, and think that your safety is more important',
  },
  {
    id: 90,
    question: 'What should be done if you arrive at an intersection and the light has turned amber?',
    options: [
      'To brake quickly for be not passed the high one',
      'Slow down, braking moderately, to avoid an accident with the other vehicles',
      'To sound three times the horn so that the conductor that him continues he listen him',
    ],
    correct_option: 'Slow down, braking moderately, to avoid an accident with the other vehicles',
  },
  {
    id: 91,
    question: 'Which is the behavior of a professional driver while on, or before entering a congested road?',
    options: [
      'Circulates among the vehicles taking advantage of the spaces, trying to have few road incidents',
      'Touches the horn insistently and changes of rail at a bad time',
      'Wait patiently with his signal indicator on. They are not despaired and seek an alternate way',
    ],
    correct_option: 'Wait patiently with his signal indicator on. They are not despaired and seek an alternate way',
  },
  {
    id: 92,
    question: 'When are the tires on a vehicle considered not safe?',
    options: [
      'When the tread of the tires is less than 1mm in depth',
      'When the drawing of the rims is very deep',
      'When the rims are hot by the sun and we travel to 80 km/h',
    ],
    correct_option: 'When the tread of the tires is less than 1mm in depth',
  },
  {
    id: 93,
    question: 'What should be done if you’re driving and the right front tire leaves the pavement?',
    options: [
      'To apply immediately the brakes and to return al pavement',
      'Hold the steering wheel firmly, remove your foot from the accelerator, and return to the pavement carefully',
      'To return quickly al pavement to its normal velocity',
    ],
    correct_option: 'Hold the steering wheel firmly, remove your foot from the accelerator, and return to the pavement carefully',
  },
  {
    id: 94,
    question: 'What is the understanding of defensive management?',
    options: [
      'To conduct to very low velocity',
      'Drive a vehicle, respecting the norms of highway administration to prevent accidents, in spite of the errors of others',
      'To conduct to low velocity in spite of the delays in the schedules',
    ],
    correct_option: 'Drive a vehicle, respecting the norms of highway administration to prevent accidents, in spite of the errors of others',
  },
  {
    id: 95,
    question: 'If you approach an intersection and the color of the light of the signal cannot be seen clearly, due to the sun light, what measures of safety should be taken?',
    options: [
      'To yield to the vehicles that travel from East to West and to expect my shift to cross',
      'Slow down and observe the movement of traffic at the signal. If it corresponds to the direction you’re traveling, proceed with caution',
      'To pass the faster than be able, avoiding to collide with the other vehicles',
    ],
    correct_option: 'Slow down and observe the movement of traffic at the signal. If it corresponds to the direction you’re traveling, proceed with caution',
  },
  {
    id: 96,
    question: 'What are the advantages of checking tires, belts, lights, and levels of fluids with the frequency recommended by the manufacturer?',
    options: [
      'To avoid the accidents with pedestrian',
      'To avoid unexpected overheating and damage to the motor, as well as road accidents',
      'Road conflicts they are prevented and conductors rolled',
    ],
    correct_option: 'To avoid unexpected overheating and damage to the motor, as well as road accidents',
  },
  {
    id: 97,
    question: 'Which are the obligations of a responsible driver?',
    options: [
      'Respect the rights and obligations of the other users of the public highways, as well as the Traffic signs and indications of the Traffic Officers',
      'To conduct with precaution, exceeding the alone velocity when need to do it',
      'To avoid accidents al to conduct, respecting the road fixing unless by personal need require not to respect the ones that consider less important',
    ],
    correct_option: 'Respect the rights and obligations of the other users of the public highways, as well as the Traffic signs and indications of the Traffic Officers',
  },
  {
    id: 98,
    question: 'Of the following options which is the best way to change a flat tire?',
    options: [
      'To station the vehicle in a flat surface, to assure the rims with a block of wood and to change the rim as better be able',
      'Ensure that the vehicle does not hinder other drivers, apply the parking brake, secure the wheels with a block of wood before applying the jack. Loosen the lug nuts slightly, then raise the jack to an elevation of approximately 3 cm. Change the tire and tighten the lug nuts moderately, descend the jack and tighten the nuts firmly, then remove blocks of wood',
      'To rise the vehicle preferably to the stool to place the cat in any point of the vehicle and to rise it it more high possible then to loosen the nuts stopping the rim with the feet to avoid that of returns, to change the rim, to remove cat and to circulate with security',
    ],
    correct_option: 'Ensure that the vehicle does not hinder other drivers, apply the parking brake, secure the wheels with a block of wood before applying the jack. Loosen the lug nuts slightly, then raise the jack to an elevation of approximately 3 cm. Change the tire and tighten the lug nuts moderately, descend the jack and tighten the nuts firmly, then remove blocks of wood',
  },
  {
    id: 99,
    question: 'If we get in our vehicle and see the windshield is dirty, it is recommendable',
    options: [
      'To circulate to high speed to clean it and thus we will conduct surer',
      'To clean it with running water and a little soap',
      'To Uuilize the windshield wipers in dry since we avoid that mud with the land be done or the dust',
    ],
    correct_option: 'To clean it with running water and a little soap',
  },
  {
    id: 100,
    question: 'Is it necessary to adjust the rearview mirrors of the vehicle to our height if we are going to drive only 1 km?',
    options: [
      'Is not necessary in short sections',
      'Really is not important',
      'Yes it is necessary for safety, without regard to the distance',
    ],
    correct_option: 'Yes it is necessary for safety, without regard to the distance',
  },
  {
    id: 101,
    question: 'If we approach an intersection and the signal cannot be seen clearly, because signs, trees or other objects are impeding our vision, it is recommended for safety to do the following thing',
    options: [
      'To accelerate and to touch the horn so that the other conductors yield me',
      'To stop accelerating and to pass slowly',
      'Diminish speed, and proceed with caution, trying to see the signal more clearly and observe the surrounding traffic, avoiding any problem',
    ],
    correct_option: 'Diminish speed, and proceed with caution, trying to see the signal more clearly and observe the surrounding traffic, avoiding any problem',
  },
  {
    id: 102,
    question: 'To drive during the night in conditions of optimal climate',
    options: [
      'We can distinguish a pedestrian with dark clothes to 100 meters of distance',
      'It is difficult to see the pedestrians at more than 20 meters, therefore you should use maximum caution when driving by urban zones and/or where there is concentrations of pedestrians',
      'We can see a pedestrian dressed with yellow clothes since a distance of 80 m',
    ],
    correct_option: 'It is difficult to see the pedestrians at more than 20 meters, therefore you should use maximum caution when driving by urban zones and/or where there is concentrations of pedestrians',
  },
  {
    id: 103,
    question: 'The to use of earphones to listen to music while driving is',
    options: [
      'Dangerous only for whom them uses',
      'Dangerous only for the pedestrians',
      'Dangerous for all the road users close to the one using them',
    ],
    correct_option: 'Dangerous for all the road users close to the one using them',
  },
];

export default data;
