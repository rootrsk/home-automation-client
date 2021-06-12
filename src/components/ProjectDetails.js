import React from 'react';
import Mediacard from './MediaCard'

function ProjectDetails() {
    return (
        <div className='description-page'>
            <h1>Project Details</h1>
            <section className='flex'>
                <h2>1. Hardware Components</h2>
                <div className="section flex">
                    <Mediacard 
                        img='https://i.ibb.co/mCrNHb9/Mega-Wi-Fi-R3-Atmega2560-Node-MCU-ESP8266-32-Mb-Memory-USB-TTL-CH340-G-Compatible-For-Arduino-Mega-5.jpg' 
                        title='Arduino Mega'
                        subtitle = 'It is a customized version of the classic ARDUINO MEGA R3 board. Full integration of Atmel ATmega2560 microcontroller and ESP8266 Wi-Fi IC, with 32 Mb (megabits) of flash memory, and CH340G USB-TTL converter on a single board! All components can be set up to work together or independently.'
                        
                        subtext='Mega +WiFi R3 Atmega2560+NodeMCU ESP8266 32Mb Memory USB-TTL CH340G Compatible For Arduino Mega is Full integration on one board Mega R3 ATmega2560 and WiFi ESP8266 with memory 32Mb.All of the modules can work together or separately. And everyone has their own pinout headers. The convenient solution for the development of new projects requiring Uno and WiFi. Via USB you can update sketches and firmware for ATmega328 and for ESP8266.
                        It is a customized version of the classic ARDUINO MEGA R3 board. Full integration of Atmel ATmega2560 microcontroller and ESP8266 Wi-Fi IC, with 32 Mb (megabits) of flash memory, and CH340G USB-TTL converter on a single board! All components can be set up to work together or independently.
                        For this onboard have the USB - serial converter CH340G.Use this board is very simple.The board has DIP -
                        switch, to connect the modules.For example, to USB and ATmeg2560, USB and ESP8266, ATmega2560 and ESP8266.'
                    />
                    <Mediacard 
                        img = 'https://i.ibb.co/1Xs2pM0/robu-1-26.jpg'
                        title='ESP8266'
                        subtitle='This ESP8266 Serial Port To Wi-Fi Module, FL-M1S  serial transceiver module, based on ESP8266 SoC with an integrated TCP/IP protocol stack It can either host the application or offload all Wi-Fi networking functions from another application processor.
                        '
                        subtext ='This ESP8266 Serial Port To Wi-Fi Module, FL-M1S  serial transceiver module, based on ESP8266 SoC with an integrated TCP/IP protocol stack It can either host the application or offload all Wi-Fi networking functions from another application processor.ESP8266 has powerful onboard processing and storage capabilities allowing it to integrate with sensors and other devices through GPIOs with minimal development up-front and minimal loading during runtime.
                        This module is a WiFi serial transceiver module, based on ESP8266 SoC with an integrated TCP / IP protocol stack.As a TTL‘ Serial to Wireless Internet’ device, this module easily interfaces with typical microcontrollers(MCU) to communicate via TTL serial to instantly add Wi - Fi connectivity.It runs off 3.3 V, and can draw almost 500 mA of current
                        for up to a really impressive + 19.5 dBm output power in 802.11 b mode!That gives this module a range over a hundred meters!'
                    />
                    <Mediacard 
                        img='https://i.ibb.co/rxVvcPT/robu-2-1.jpg' 
                        title='Relay'
                        subtitle = 'It is an 8 Channel Isolated 5V 10A Relay Module opto coupler, which can be controlled directly by a wide range of microcontrollers such as Arduino, AVR, PIC, ARM, PLC, etc. It is also able to control various appliances and other types of equipment with a large current. Relay output maximum contact is AC250V 10A and DC30V 10A.'

                        subtext='It is an 8 Channel Isolated 5V 10A Relay Module opto coupler, which can be controlled directly by a wide range of microcontrollers such as Arduino, AVR, PIC, ARM, PLC, etc. It is also able to control various appliances and other types of equipment with a large current. Relay output maximum contact is AC250V 10A and DC30V 10A.

                        One can connect a microcontroller with standard interface directly to it. Red working status indicator lights are conducive to the safe use. The 8 Channel Isolated 5V 10A Relay Module optocoupler has a wide range of applications such as all MCU control, industrial sector, PLC control, smart home control.

                        So, ready to get switching on your Raspberry Pi?! This neat relay module features 8 x 12V relays rated at 10A/250V each. It is designed to switch up to 4 high currents (10A) or high voltage (250V) loads with the help of microcontroller!

                        Each relay can individually switch to on/off state. It only requires a voltage of approx 1.0V to switch the inputs on but can handle input voltages up to 12V. This makes it ideal for 3.3V, 5V & 12V devices.
                        '
                    />
                    <Mediacard 
                        img = 'https://i.ibb.co/LhVSZMh/Grove-Temperature-Humidity-Sensor-DHT11.jpg'
                        title='Humidity & Temperatue'
                        subtitle = 'Temperature & Humidity Sensor (DHT11) especially for you. It can measure temperature as well as humidity at the same time! It’s a high quality, low-cost digital temperature and humidity sensor based on the new DHT11 module. It utilizes a DHT11 sensor that can meet the measurement needs for general purposes. '
                        
                        subtext ='Temperature & Humidity Sensor (DHT11) especially for you. It can measure temperature as well as humidity at the same time! It’s a high quality, low-cost digital temperature and humidity sensor based on the new DHT11 module. It utilizes a DHT11 sensor that can meet the measurement needs for general purposes. DHT11 is the most common temperature and humidity module for Arduino and Raspberry Pi. However, this sensor provides reliable readings when environment humidity condition is in between 20% RH and 90% RH, and temperature condition is in between 0°C and 50°C.  Furthermore, it has excellent reliability as well as long term stability and it provides a pre-calibrated digital output.

                        This sensor fulfills needs of measurement in most home and daily applications that don’ t contain extreme conditions.You can use this sensor in various applications such as air conditioner, humidity regulator, weather station, consumption product, automatic control, testing and inspection equipment, etc.
                        '
                    />
                    <Mediacard 
                        img = 'https://i.ibb.co/3ks7FYH/az-large-5121548.jpg'
                        title='MQ9 Gas Sensor'
                        subtitle = 'This is MQ-9 Carbon Monoxide, Methane, and LPG Gas Sensor Module can be used to sense Carbon Monoxide and Methane Gas. Sensitive material of the MQ9 gas sensor is SnO2, which with lower conductivity in clean air.'
                        subtext='This is MQ-9 Carbon Monoxide, Methane, and LPG Gas Sensor Module can be used to sense Carbon Monoxide and Methane Gas. Sensitive material of the MQ9 gas sensor is SnO2, which with lower conductivity in clean air.
                        It makes detection by the method of cycle high and low temperature, and detect CO when the low temperature(heated by 1.5 V).The sensor’ s conductivity is higher along with the gas concentration rising.When a high temperature(heated by 5.0 V), it detects Methane, Propane, etc.combustible gas and cleans the other gases adsorbed under low temperature.
                        '
                    />
                    <Mediacard 
                        img ='https://i.ibb.co/zxFdBhJ/Passive-Buzzer-Module-1.jpg'
                        title='Buzzer'
                        subtitle ='Active Buzzer Module is a built-in construction of digital transducers, DC energy provides, extensively utilized in computer systems, printers, copiers, alarms, digital toys, car digital apparatus, phones, timers and different digital electronics projects for Alert sound.'
                        
                        subtext ='Active Buzzer Module is a built-in construction of digital transducers, DC energy provides, extensively utilized in computer systems, printers, copiers, alarms, digital toys, car digital apparatus, phones, timers and different digital electronics projects for Alert sound.

                        This PCB Mounted Active Buzzer Module can produce a range of sound tones depending on the input frequency, i.e it can generate tones between 1.5 to 2.5 kHz by switching it on and off at different frequencies either using delays or PWM.

                        This module is ideally suited to adding noise to your project and is compatible with a pin pitch of 2.54 mm
                        while functioning with microcontrollers such as the Arduino.This module lets you respond to programmatic changes with a lovely annoying buzzer that can be altered over a range of frequencies to ensure maximum irritation.
                        To operate the I / O pin must receive a square wave to trigger the buzzer.This can be produced within all popular microcontrollers.
                        '
                    />
                    <Mediacard 
                        img = 'https://i.ibb.co/GQV0Bkw/amico-breadboard-img-1.jpg'
                        title='BreadBoard'
                        subtitle = 'An MB102 830 Points Solderless Prototype PCB Breadboard is an invaluable tool for experimenting with circuit designs whether in the R&D or university lab. A breadboard is used to make up temporary circuits for testing or to try out an idea. No soldering is required so it is easy to change connections and replace components.'
                        subtext ='An MB102 830 Points Solderless Prototype PCB Breadboard is an invaluable tool for experimenting with circuit designs whether in the R&D or university lab. A breadboard is used to make up temporary circuits for testing or to try out an idea. No soldering is required so it is easy to change connections and replace components.
                        '
                    />
                    <Mediacard 
                        img='https://i.ibb.co/HxbvKyM/5mm-led-light-emitting-diode-500x500.jpg' 
                        title='Leds'
                        subtitle ='These are a 5mm Various DIP LED. An LED is a two-lead semiconductor light source, which emits lights when activated. When an appropriate voltage is applied to the LED terminal, then the electrons are able to recombine with the electron holes within the device and release energy in the form of photons. 
                        '
                        subtext ='These are a 5mm Various DIP LED. An LED is a two-lead semiconductor light source, which emits lights when activated. When an appropriate voltage is applied to the LED terminal, then the electrons are able to recombine with the electron holes within the device and release energy in the form of photons. This effect is known as electroluminescence. The color of the LED is determined by the energy bandgap of the semiconductor
                        '
                    />
                    <Mediacard 
                        img = 'https://i.ibb.co/7pnxXsS/3a9fd17555ac52c16731c4ec95cbf0f2.jpg'
                        title='Home Appliances'
                        subtitle ='This is MQ-9 Carbon Monoxide, Methane, and LPG Gas Sensor Module can be used to sense Carbon Monoxide and Methane Gas. Sensitive material of the MQ9 gas sensor is SnO2, which with lower conductivity in clean air.
                        '
                        subtext='This is MQ-9 Carbon Monoxide, Methane, and LPG Gas Sensor Module can be used to sense Carbon Monoxide and Methane Gas. Sensitive material of the MQ9 gas sensor is SnO2, which with lower conductivity in clean air.
                        It makes detection by the method of cycle high and low temperature, and detect CO when the low temperature(heated by 1.5 V).The sensor’ s conductivity is higher along with the gas concentration rising.When a high temperature(heated by 5.0 V), it detects Methane, Propane, etc.combustible gas and cleans the other gases adsorbed under low temperature.
                        '
                    />
                </div>
               
            </section>
            <section>
                
            </section>
            {/* <section>
                <h2>2. Connection & Diagram </h2>
            </section>
            <section>
                <h2>3. Arduino </h2>
            </section>
            <section>
                <h2>4. ESP8266</h2>
            </section>
            <section>
                <h2>5. Connection & Deagram </h2>
            </section>
            <section>
                <h2>6. Hardware Components</h2>
            </section>
            <section>
                <h2>7. BackEnd</h2>
            </section>
            <section>
                <h2>2. FrontEnd </h2>
            </section> */}
            {/* <section>
                <h2>1. Android Application</h2>
            </section> */}
        </div>
    )
}

export default ProjectDetails
