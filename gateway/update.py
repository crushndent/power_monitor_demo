import requests
import serial
import time

# COM_PORT = '/dev/ttyUSB0'
COM_PORT = 'COM7'
URL = "http://192.168.10.157:8080/device/post/"
ser = serial.Serial(COM_PORT, 9600, timeout=15)


def queryPower():
    global ser
    loopcnt = 0
    while (loopcnt < 3):
        ser.flush()
        device_read = ser.readline()   # read a '\n' terminated line
        line = device_read.decode("utf-8")
        print(":" + line)
        # Take off the \r\n
        line = line.replace("\r\n", "")
        measures = line.split(",")
        # Take off the string at the beginning of the response 'Read'
        # If no measures were returned, then loop until there are some.
        if (len(measures)):
            break
        loopcnt = loopcnt + 1
    info = {}
    info['Vrms'] = measures[2]
    info['Irms'] = measures[3]
    info['Irms2'] = measures[4]
    info['Pa'] = measures[0]
    info['Preact'] = measures[1]
    info['Preal'] = measures[5]
    info['site'] = 'mysiteMAC'
    print(info)
    return requests.get(URL, info)

def Upload():
    sleep_time = 5
    # Everything is initialized, now begin the while loop.
    global ser
    while (1):
        try:
            r1 = queryPower()
            # Was the record created ok?
            if r1.status_code == 200:
                print('sent successfully')
            time.sleep(sleep_time)
        except Exception as e:
            print("*****An ERROR Occurred!*****")
            print(type(e))
            print(e.args)
            ser.close()
            ser = serial.Serial(COM_PORT, 9600, timeout=15)


if __name__ == "__main__":
    Upload()
