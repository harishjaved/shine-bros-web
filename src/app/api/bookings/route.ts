import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

// GET: Fetch all bookings
export async function GET() {
  try {
    const bookingsRef = collection(db, 'bookings');
    // We order by createdAt descending
    const q = query(bookingsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const bookings = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Error reading from Firestore:", error);
    // If it fails (e.g. missing index), return empty array or error
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}

// POST: Add a new booking
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Add timestamp
    const newBookingData = {
      ...body,
      createdAt: new Date().toISOString(),
    };

    const bookingsRef = collection(db, 'bookings');
    const docRef = await addDoc(bookingsRef, newBookingData);

    return NextResponse.json(
      { message: "Booking created successfully", booking: { id: docRef.id, ...newBookingData } },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to process booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
