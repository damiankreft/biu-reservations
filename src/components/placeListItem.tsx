'use client';
import React, { useContext } from 'react';
import { Place } from '@/data/place';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import playIcon from '@/../public/icons/play.svg';
import heartIcon from '@/../public/icons/heart.svg';

export default function PlaceListItem({
    place,
    onClick,
}: {
    place: Place;
    onClick?: (placeId: string) => void;
}) {
    const { t } = useTranslation();

    return (
        <>
            <div className="size-20 relative">
                <Image
                    className="size-20 rounded-box"
                    alt="Place image"
                    fill={true}
                    src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                />
            </div>
            <div onClick={() => onClick?.(place.id)}>
                <div>{place.name}</div>
                <div className="text-xs uppercase opacity-80">
                    {place.type ||
                        t('noCategory', {
                            defaultValue: 'No category available',
                        })}
                    ,
                    {' ' + place.city ||
                        t('noLocation', {
                            defaultValue: 'No location available',
                        })}
                </div>
            </div>
            <p className="list-col-wrap text-xs">
                {place.description ||
                    t('noDescription', {
                        defaultValue: 'No description available',
                    })}
            </p>
            <button className="btn btn-square btn-ghost">
                <Image src={playIcon} alt={t('alt', 'Play icon')} width={24} height={24} />
            </button>
            <button className="btn btn-square btn-ghost">
                <Image src={heartIcon} alt={t('alt', 'Heart icon')} width={24} height={24} />
            </button>
        </>
    );
}
