"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AmenityList } from "@/components/AmenityList";
import { BackLink } from "@/components/BackLink";
import { BookingCard } from "@/components/BookingCard";
import { HostInfo } from "@/components/HostInfo";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Navbar } from "@/components/Navbar";
import { PhotoGallery } from "@/components/PhotoGallery";
import { RoomHeader } from "@/components/RoomHeader";
import { getRoomById } from "@/lib/room-details";
import type { Room } from "@/types/room";

const LOAD_DELAY_MS = 1000;

interface LoadedRoom {
  id: string;
  room: Room | undefined;
}

const RoomView = () => {
  const { id } = useParams<{ id: string }>();
  const [loaded, setLoaded] = useState<LoadedRoom | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded({ id, room: getRoomById(id) });
    }, LOAD_DELAY_MS);
    return () => clearTimeout(timer);
  }, [id]);

  const isLoading = loaded?.id !== id;
  const room = isLoading ? undefined : loaded.room;

  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <Navbar showSearch={false} />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 md:px-8 md:py-8">
        {isLoading && <LoadingSpinner />}
        {!isLoading && !room && (
          <div className="flex flex-col items-start gap-4 py-16">
            <p className="text-lg font-semibold text-ink">We couldn&apos;t find this stay.</p>
            <BackLink />
          </div>
        )}
        {room && (
          <div className="flex flex-col gap-8">
            <BackLink />
            <div className="flex flex-col gap-8 md:grid md:grid-cols-[1fr_360px] md:items-start md:gap-12">
              <div className="flex flex-col gap-8">
                <PhotoGallery photos={room.photos} />
                <RoomHeader
                  title={room.title}
                  location={room.location}
                  rating={room.rating}
                  reviewCount={room.reviewCount}
                />
                <HostInfo host={room.host} />
                <AmenityList amenities={room.amenities} />
              </div>
              <div className="md:sticky md:top-24">
                <BookingCard
                  pricePerNight={room.pricePerNight}
                  minGuests={room.minGuests}
                  maxGuests={room.maxGuests}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const RoomPage = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <RoomView />
  </Suspense>
);

export default RoomPage;
