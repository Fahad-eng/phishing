import React, { useState, useContext } from 'react';
import ErrorMessage from './ErrorMessage'
import {
  Flex, Box, FormControl, FormLabel, Input, Button,
  Text, useMediaQuery,
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Select
} from '@chakra-ui/react';
import { BsArrowRight } from "react-icons/bs"
import { MdSecurity } from "react-icons/md"
import { Link } from 'react-router-dom';
import UserContext from "../Context/User/UserContext";


export default function RegsiterPage({ nextStep }) {

  const [isLargerThan760] = useMediaQuery("(max-width: 760px)")


  const userContext = useContext(UserContext);

  const { addUser } = userContext;


  // ============= State Handling ================//
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [occupation, setOccupation] = useState('');
  const [field, setField] = useState('');
  const [error, setError] = useState('');
  const [phishingType, setPhishingType] = useState('');
  const [userType, setUserType] = useState('');
  // ==============================================//

  const field_1 = ["Computer Science/Engineering", "Cyber Security", "Software Engineering", "Electrical Engineering", "Other"];
  const field_2 = ["Business Administration", "Art", "History", "Economics", "Languages/Literature", "Political Science", "Sociology", "Other"];
  let user_type_value = null;
  let options = null;
  if (userType === "technical") {
    user_type_value = field_1;
  } else if (userType === "non-technical") {
    user_type_value = field_2;
  } else {
    user_type_value = [];
  }

  if (user_type_value) {
    options = user_type_value.map((el) => <option key={el} value={el}>{el}</option>);
  }

  //  =========== Submit Handler  =====================//
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !age || !gender || !city || !occupation || !field || !phishingType || !userType) {
      setError('Please Fill Complete Details!')
      return;
    }
    if (!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
      setError('Invalid Email!')
    }

    if (name && new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email) && age && gender && city && occupation && field && phishingType && userType) {

      addUser({ name, email, age, gender, city, occupation, field, phishingType, userType })
      nextStep()
    }


    setTimeout(() => {
      setError('')
    }, 5500)
  }

  //  =================================================//

  return (
    <>
      <Flex direction="column">
        {/* THIS IS THE UPPER PART */}
        <Box bg="#3c403d" height={"350px"}>
          <Flex direction="column" align="center" justify="center" pt={10}>
            <Text fontSize="3xl" color="white">Can you catch the phish?</Text>
            <Text fontSize="xl" color="white" width="80vw" pt={10}><>
              You may make up a name and email just to make your experience more realistic. Kindly select your real age, gender, city, occupation, and field. Your information is <span onClick={onOpen} style={{ textDecoration: "underline", cursor: "pointer" }} >safe</span> with us.</></Text>
          </Flex>
        </Box>
        {/*  UPPER PART ENDS HERE */}

        {/* THIS IS THE LOWER PART */}
        <Flex direction="column" align="center" justify="center" style={{ height: '970px' }}>
          <Box
            style={isLargerThan760 ? { width: "400px" } : { width: "500px" }}
            p={8}
            // maxWidth="700px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            bg="white"
          >
            {
              <>
                <Box my={4} textAlign="left">
                  <form>
                    {error && <ErrorMessage message={error} />}
                    <FormControl p={4} pb={6}>
                      <Input
                        type="text"
                        placeholder="Please provide a real or fake name"
                        size="lg"
                        value={name}
                        p={9}
                        onChange={event => setName(event.currentTarget.value)}
                      />
                      <FormLabel color="#A0AEC0"><b>Name</b></FormLabel>
                    </FormControl>
                    <FormControl p={4} pb={6}>
                      <Input
                        type="email"
                        placeholder="Please provide a real or fake email"
                        size="lg"
                        value={email}
                        onChange={event => setEmail(event.currentTarget.value)}
                        p={9}
                      />
                      <FormLabel color="#A0AEC0"><b>Email</b></FormLabel>
                    </FormControl>
                    <FormControl p={4} pb={6}>
                      <Input
                        type="number"
                        placeholder="Please enter your real age"
                        size="lg"
                        value={age}
                        onChange={event => setAge(event.currentTarget.value)}
                        p={9}
                      />
                      <FormLabel color="#A0AEC0"><b>Age</b></FormLabel>
                    </FormControl>
                    <FormControl p={4} pb={6}>
                      <Select placeholder="Please select your real gender" color="#A0AEC0"
                        onChange={event => setGender(event.currentTarget.value)} height="70px">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Select>
                      <FormLabel color="#A0AEC0"><b>Gender</b></FormLabel>
                    </FormControl>
                    <FormControl p={4} pb={6}>
                      <Select placeholder="Please select your city" color="#A0AEC0"
                        onChange={event => setCity(event.currentTarget.value)} height="70px">
                        <option value="Islamabad">Islamabad</option>
                        <option value="" disabled>Punjab Cities</option>
                        <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
                        <option value="Ahmadpur East">Ahmadpur East</option>
                        <option value="Ali Khan Abad">Ali Khan Abad</option>
                        <option value="Alipur">Alipur</option>
                        <option value="Arifwala">Arifwala</option>
                        <option value="Attock">Attock</option>
                        <option value="Bhera">Bhera</option>
                        <option value="Bhalwal">Bhalwal</option>
                        <option value="Bahawalnagar">Bahawalnagar</option>
                        <option value="Bahawalpur">Bahawalpur</option>
                        <option value="Bhakkar">Bhakkar</option>
                        <option value="Burewala">Burewala</option>
                        <option value="Chillianwala">Chillianwala</option>
                        <option value="Chakwal">Chakwal</option>
                        <option value="Chichawatni">Chichawatni</option>
                        <option value="Chiniot">Chiniot</option>
                        <option value="Chishtian">Chishtian</option>
                        <option value="Daska">Daska</option>
                        <option value="Darya Khan">Darya Khan</option>
                        <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                        <option value="Dhaular">Dhaular</option>
                        <option value="Dina">Dina</option>
                        <option value="Dinga">Dinga</option>
                        <option value="Dipalpur">Dipalpur</option>
                        <option value="Faisalabad">Faisalabad</option>
                        <option value="Ferozewala">Ferozewala</option>
                        <option value="Fateh Jhang">Fateh Jang</option>
                        <option value="Ghakhar Mandi">Ghakhar Mandi</option>
                        <option value="Gojra">Gojra</option>
                        <option value="Gujranwala">Gujranwala</option>
                        <option value="Gujrat">Gujrat</option>
                        <option value="Gujar Khan">Gujar Khan</option>
                        <option value="Hafizabad">Hafizabad</option>
                        <option value="Haroonabad">Haroonabad</option>
                        <option value="Hasilpur">Hasilpur</option>
                        <option value="Haveli Lakha">Haveli Lakha</option>
                        <option value="Jatoi">Jatoi</option>
                        <option value="Jalalpur">Jalalpur</option>
                        <option value="Jattan">Jattan</option>
                        <option value="Jampur">Jampur</option>
                        <option value="Jaranwala">Jaranwala</option>
                        <option value="Jhang">Jhang</option>
                        <option value="Jhelum">Jhelum</option>
                        <option value="Kalabagh">Kalabagh</option>
                        <option value="Karor Lal Esan">Karor Lal Esan</option>
                        <option value="Kasur">Kasur</option>
                        <option value="Kamalia">Kamalia</option>
                        <option value="Kamoke">Kamoke</option>
                        <option value="Khanewal">Khanewal</option>
                        <option value="Khanpur">Khanpur</option>
                        <option value="Kharian">Kharian</option>
                        <option value="Khushab">Khushab</option>
                        <option value="Kot Addu">Kot Addu</option>
                        <option value="Jauharabad">Jauharabad</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Lalamusa">Lalamusa</option>
                        <option value="Layyah">Layyah</option>
                        <option value="Liaquat Pur">Liaquat Pur</option>
                        <option value="Lodhran">Lodhran</option>
                        <option value="Malakwal">Malakwal</option>
                        <option value="Mamoori">Mamoori</option>
                        <option value="Mailsi">Mailsi</option>
                        <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                        <option value="Mian Channu">Mian Channu</option>
                        <option value="Mianwali">Mianwali</option>
                        <option value="Multan">Multan</option>
                        <option value="Murree">Murree</option>
                        <option value="Muridke">Muridke</option>
                        <option value="Mianwali Bangla">Mianwali Bangla</option>
                        <option value="Muzaffargarh">Muzaffargarh</option>
                        <option value="Narowal">Narowal</option>
                        <option value="Nankana Sahib">Nankana Sahib</option>
                        <option value="Okara">Okara</option>
                        <option value="Renala Khurd">Renala Khurd</option>
                        <option value="Pakpattan">Pakpattan</option>
                        <option value="Pattoki">Pattoki</option>
                        <option value="Pir Mahal">Pir Mahal</option>
                        <option value="Qaimpur">Qaimpur</option>
                        <option value="Qila Didar Singh">Qila Didar Singh</option>
                        <option value="Rabwah">Rabwah</option>
                        <option value="Raiwind">Raiwind</option>
                        <option value="Rajanpur">Rajanpur</option>
                        <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                        <option value="Rawalpindi">Rawalpindi</option>
                        <option value="Sadiqabad">Sadiqabad</option>
                        <option value="Safdarabad">Safdarabad</option>
                        <option value="Sahiwal">Sahiwal</option>
                        <option value="Sangla Hill">Sangla Hill</option>
                        <option value="Sarai Alamgir">Sarai Alamgir</option>
                        <option value="Sargodha">Sargodha</option>
                        <option value="Shakargarh">Shakargarh</option>
                        <option value="Sheikhupura">Sheikhupura</option>
                        <option value="Sialkot">Sialkot</option>
                        <option value="Sohawa">Sohawa</option>
                        <option value="Soianwala">Soianwala</option>
                        <option value="Siranwali">Siranwali</option>
                        <option value="Talagang">Talagang</option>
                        <option value="Taxila">Taxila</option>
                        <option value="Toba Tek Singh">Toba Tek Singh</option>
                        <option value="Vehari">Vehari</option>
                        <option value="Wah Cantonment">Wah Cantonment</option>
                        <option value="Wazirabad">Wazirabad</option>
                        <option value="" disabled>Sindh Cities</option>
                        <option value="Badin">Badin</option>
                        <option value="Bhirkan">Bhirkan</option>
                        <option value="Rajo Khanani">Rajo Khanani</option>
                        <option value="Chak">Chak</option>
                        <option value="Dadu">Dadu</option>
                        <option value="Digri">Digri</option>
                        <option value="Diplo">Diplo</option>
                        <option value="Dokri">Dokri</option>
                        <option value="Ghotki">Ghotki</option>
                        <option value="Haala">Haala</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Islamkot">Islamkot</option>
                        <option value="Jacobabad">Jacobabad</option>
                        <option value="Jamshoro">Jamshoro</option>
                        <option value="Jungshahi">Jungshahi</option>
                        <option value="Kandhkot">Kandhkot</option>
                        <option value="Kandiaro">Kandiaro</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Kashmore">Kashmore</option>
                        <option value="Keti Bandar">Keti Bandar</option>
                        <option value="Khairpur">Khairpur</option>
                        <option value="Kotri">Kotri</option>
                        <option value="Larkana">Larkana</option>
                        <option value="Matiari">Matiari</option>
                        <option value="Mehar">Mehar</option>
                        <option value="Mirpur Khas">Mirpur Khas</option>
                        <option value="Mithani">Mithani</option>
                        <option value="Mithi">Mithi</option>
                        <option value="Mehrabpur">Mehrabpur</option>
                        <option value="Moro">Moro</option>
                        <option value="Nagarparkar">Nagarparkar</option>
                        <option value="Naudero">Naudero</option>
                        <option value="Naushahro Feroze">Naushahro Feroze</option>
                        <option value="Naushara">Naushara</option>
                        <option value="Nawabshah">Nawabshah</option>
                        <option value="Nazimabad">Nazimabad</option>
                        <option value="Qambar">Qambar</option>
                        <option value="Qasimabad">Qasimabad</option>
                        <option value="Ranipur">Ranipur</option>
                        <option value="Ratodero">Ratodero</option>
                        <option value="Rohri">Rohri</option>
                        <option value="Sakrand">Sakrand</option>
                        <option value="Sanghar">Sanghar</option>
                        <option value="Shahbandar">Shahbandar</option>
                        <option value="Shahdadkot">Shahdadkot</option>
                        <option value="Shahdadpur">Shahdadpur</option>
                        <option value="Shahpur Chakar">Shahpur Chakar</option>
                        <option value="Shikarpaur">Shikarpaur</option>
                        <option value="Sukkur">Sukkur</option>
                        <option value="Tangwani">Tangwani</option>
                        <option value="Tando Adam Khan">Tando Adam Khan</option>
                        <option value="Tando Allahyar">Tando Allahyar</option>
                        <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>
                        <option value="Thatta">Thatta</option>
                        <option value="Umerkot">Umerkot</option>
                        <option value="Warah">Warah</option>
                        <option value="" disabled>Khyber Cities</option>
                        <option value="Abbottabad">Abbottabad</option>
                        <option value="Adezai">Adezai</option>
                        <option value="Alpuri">Alpuri</option>
                        <option value="Akora Khattak">Akora Khattak</option>
                        <option value="Ayubia">Ayubia</option>
                        <option value="Banda Daud Shah">Banda Daud Shah</option>
                        <option value="Bannu">Bannu</option>
                        <option value="Batkhela">Batkhela</option>
                        <option value="Battagram">Battagram</option>
                        <option value="Birote">Birote</option>
                        <option value="Chakdara">Chakdara</option>
                        <option value="Charsadda">Charsadda</option>
                        <option value="Chitral">Chitral</option>
                        <option value="Daggar">Daggar</option>
                        <option value="Dargai">Dargai</option>
                        <option value="Darya Khan">Darya Khan</option>
                        <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                        <option value="Doaba">Doaba</option>
                        <option value="Dir">Dir</option>
                        <option value="Drosh">Drosh</option>
                        <option value="Hangu">Hangu</option>
                        <option value="Haripur">Haripur</option>
                        <option value="Karak">Karak</option>
                        <option value="Kohat">Kohat</option>
                        <option value="Kulachi">Kulachi</option>
                        <option value="Lakki Marwat">Lakki Marwat</option>
                        <option value="Latamber">Latamber</option>
                        <option value="Madyan">Madyan</option>
                        <option value="Mansehra">Mansehra</option>
                        <option value="Mardan">Mardan</option>
                        <option value="Mastuj">Mastuj</option>
                        <option value="Mingora">Mingora</option>
                        <option value="Nowshera">Nowshera</option>
                        <option value="Paharpur">Paharpur</option>
                        <option value="Pabbi">Pabbi</option>
                        <option value="Peshawar">Peshawar</option>
                        <option value="Saidu Sharif">Saidu Sharif</option>
                        <option value="Shorkot">Shorkot</option>
                        <option value="Shewa Adda">Shewa Adda</option>
                        <option value="Swabi">Swabi</option>
                        <option value="Swat">Swat</option>
                        <option value="Tangi">Tangi</option>
                        <option value="Tank">Tank</option>
                        <option value="Thall">Thall</option>
                        <option value="Timergara">Timergara</option>
                        <option value="Tordher">Tordher</option>
                        <option value="" disabled>Balochistan Cities</option>
                        <option value="Awaran">Awaran</option>
                        <option value="Barkhan">Barkhan</option>
                        <option value="Chagai">Chagai</option>
                        <option value="Dera Bugti">Dera Bugti</option>
                        <option value="Gwadar">Gwadar</option>
                        <option value="Harnai">Harnai</option>
                        <option value="Jafarabad">Jafarabad</option>
                        <option value="Jhal Magsi">Jhal Magsi</option>
                        <option value="Kacchi">Kacchi</option>
                        <option value="Kalat">Kalat</option>
                        <option value="Kech">Kech</option>
                        <option value="Kharan">Kharan</option>
                        <option value="Khuzdar">Khuzdar</option>
                        <option value="Killa Abdullah">Killa Abdullah</option>
                        <option value="Killa Saifullah">Killa Saifullah</option>
                        <option value="Kohlu">Kohlu</option>
                        <option value="Lasbela">Lasbela</option>
                        <option value="Lehri">Lehri</option>
                        <option value="Loralai">Loralai</option>
                        <option value="Mastung">Mastung</option>
                        <option value="Musakhel">Musakhel</option>
                        <option value="Nasirabad">Nasirabad</option>
                        <option value="Nushki">Nushki</option>
                        <option value="Panjgur">Panjgur</option>
                        <option value="Pishin Valley">Pishin Valley</option>
                        <option value="Quetta">Quetta</option>
                        <option value="Sherani">Sherani</option>
                        <option value="Sibi">Sibi</option>
                        <option value="Sohbatpur">Sohbatpur</option>
                        <option value="Washuk">Washuk</option>
                        <option value="Zhob">Zhob</option>
                        <option value="Ziarat">Ziarat</option>
                      </Select>
                      <FormLabel color="#A0AEC0"><b>City</b></FormLabel>
                    </FormControl>
                    <FormControl p={4} pb={6}>
                      <Select placeholder="Please select your real occupation" color="#A0AEC0"
                        onChange={event => setOccupation(event.currentTarget.value)}
                        height="70px">
                        <option value="student">Student</option>
                        <option value="employed">Employed</option>
                        <option value="unemployed">Unemployed</option>
                      </Select>
                      <FormLabel color="#A0AEC0"><b>Occupation</b></FormLabel>
                    </FormControl>
                    <FormControl p={4} pb={6}>
                      <Select placeholder="Please select your type" color="#A0AEC0"
                        onChange={event => setUserType(event.currentTarget.value)} height="70px">
                        <option value="technical">Techninal</option>
                        <option value="non-technical">Non-technical</option>
                      </Select>
                      <FormLabel color="#A0AEC0"><b>User Background</b></FormLabel>
                    </FormControl>
                    <FormControl p={4} pb={6}>
                      <Select placeholder="Please select your type" color="#A0AEC0"
                        onChange={event => setPhishingType(event.currentTarget.value)} height="70px">
                        <option value="RWS">Phishing + Remote Work Security</option>
                        <option value="EPayS">Phishing + E-payement Security</option>
                      </Select>
                      <FormLabel color="#A0AEC0"><b>Phishing Type</b></FormLabel>
                    </FormControl>
                    <FormControl p={4} pb={6}>
                      <Select placeholder="Please select your real field" color="#A0AEC0"
                        onChange={event => setField(event.currentTarget.value)}
                        height="70px">
                        {options}
                      </Select>
                      <FormLabel color="#A0AEC0"><b>Field</b></FormLabel>
                    </FormControl>
                    <Link>
                      <Button
                        colorScheme="gray" size="lg" rightIcon={<BsArrowRight />}
                        style={isLargerThan760 ? { width: "350px" } : { width: "430px" }}
                        // style={{ height: "50px" }}
                        onClick={(e) => handleSubmit(e)}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </form>
                </Box>
              </>
            }
          </Box>
        </Flex>
        {/*  LOWER PART ENDS HERE */}
      </Flex>

      {/*  MODAL WHEN CLICKING ON SAFE */}
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ fontSize: "2.2rem" }}><>Safe <MdSecurity /></></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="xl">This survey is for a master’s research project to understand the phishing landscape in Pakistan and to create awareness on how to identify and prevent from phishing scams. All the information you provide will be confidential and remain safe with us. If you want to stay anonymous, can make up any name or email that you would want. Kindly select your real age, gender, city, occupation, and field.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/*  MODAL ENDS HERE */}
    </>
  );
}