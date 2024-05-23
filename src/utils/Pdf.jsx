'use client'
import { Document, Text, Page } from "@react-pdf/renderer";

import React from 'react'

const Pdf = () => {
    return (
        <Document>
            <Page>
                <Text>
                    ArtHat
                </Text>
            </Page>

        </Document>
    )
}

export default Pdf
