import PoetryLayout from "@/components/poetry-layout";

export default function FirstMeeting() {
  return (
    <PoetryLayout
      title="First Meeting"
      subtitle="The moment that changed everything"
      backgroundImage="https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
    >
      <div className="space-y-6 text-foreground">
        <p>पहली नज़र में ही अल्का,</p>
        <p>तुमने मेरा दिल चुरा लिया था।</p>
        <p>तुम्हारी मुस्कान की रोशनी में,</p>
        <p>मेरा प्यार जग गया था।</p>
        
        <div className="my-8"></div>
        
        <p>वो पल था कितना खूबसूरत,</p>
        <p>जब तुमसे पहली बार मिला।</p>
        <p>अल्का, तुम्हारी आँखों में,</p>
        <p>मैंने अपना प्यार देखा था।</p>
        
        <div className="my-8"></div>
        
        <p>तब से लेकर आज तक,</p>
        <p>तुम्हारे बिना जी नहीं सकता।</p>
        <p>अल्का, तुम हो मेरी जिंदगी,</p>
        <p>तुम्हारे बिना मैं कुछ भी नहीं।</p>
      </div>
    </PoetryLayout>
  );
}
