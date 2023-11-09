import '../app.css'
import PhoneItem from './PhoneItem'

export default function PhList() {

    const DummyData = [
        {
            name: "Jennifer Johnson",
            phone: "3456789012",
            photo: "https://i.pravatar.cc/150?img=4"
        },
        {
            name: "William Brown",
            phone: "4567890123",
            photo: "https://i.pravatar.cc/150?img=5"
        },
        {
            name: "Elizabeth Davis",
            phone: "5678901234",
            photo: "https://i.pravatar.cc/150?img=6"
        },
        {
            name: "David Miller",
            phone: "6789012345",
            photo: "https://i.pravatar.cc/150?img=7"
        },
        {
            name: "Sarah Wilson",
            phone: "7890123456",
            photo: "https://i.pravatar.cc/150?img=8"
        },
        {
            name: "Richard Moore",
            phone: "8901234567",
            photo: "https://i.pravatar.cc/150?img=9"
        },
        {
            name: "Emily Taylor",
            phone: "9012345678",
            photo: "https://i.pravatar.cc/150?img=10"
        }, {
            name: "Asep Sutisna",
            phone: "123-456-7890",
            photo: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "Eni Maryani",
            phone: "234-567-8901",
            photo: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            name: "Ujang Hermawan",
            phone: "345-678-9012",
            photo: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            name: "John Doe",
            phone: "0123456789",
            photo: "https://i.pravatar.cc/150?img=1"
        },
        {
            name: "Jane Doe",
            phone: "1234567890",
            photo: "https://i.pravatar.cc/150?img=2"
        },
        {
            name: "Michael Smith",
            phone: "2345678901",
            photo: "https://i.pravatar.cc/150?img=3"
        },
        {
            name: "Jennifer Johnson",
            phone: "3456789012",
            photo: "https://i.pravatar.cc/150?img=4"
        },
        {
            name: "William Brown",
            phone: "4567890123",
            photo: "https://i.pravatar.cc/150?img=5"
        },
        {
            name: "Elizabeth Davis",
            phone: "5678901234",
            photo: "https://i.pravatar.cc/150?img=6"
        },
        {
            name: "David Miller",
            phone: "6789012345",
            photo: "https://i.pravatar.cc/150?img=7"
        },
        {
            name: "Sarah Wilson",
            phone: "7890123456",
            photo: "https://i.pravatar.cc/150?img=8"
        },
        {
            name: "Richard Moore",
            phone: "8901234567",
            photo: "https://i.pravatar.cc/150?img=9"
        },
        {
            name: "Emily Taylor",
            phone: "9012345678",
            photo: "https://i.pravatar.cc/150?img=10"
        }, {
            name: "Asep Sutisna",
            phone: "123-456-7890",
            photo: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "Eni Maryani",
            phone: "234-567-8901",
            photo: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            name: "Ujang Hermawan",
            phone: "345-678-9012",
            photo: "https://randomuser.me/api/portraits/men/3.jpg"
        }
    ]


    return (
        <>
        <div className="main" id="main-data">
            {DummyData.map((user) => (
                <PhoneItem user={user} />
            ))}
        </div>
        </>
    )

}